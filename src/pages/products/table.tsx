import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Fab,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
} from '@mui/material';
import { DataGrid, GridCellEditStopParams, GridColDef } from '@mui/x-data-grid';
import {
  useDeleteInvoiceMutation,
  useGetInvoicesQuery,
  useUpdateInvoiceMutation,
} from 'src/schemas/generated';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import { CreateProductModal } from './create-modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { InvoiceEntity } from 'src/schemas/generated';
import { isNil, omitBy, pick } from 'lodash';

// Данные о колонках таблицы накладных
const columns: GridColDef<InvoiceEntity>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Имя',
    width: 150,
    editable: true,
    valueGetter: (params) => params.row.attributes?.name,
  },
  {
    field: 'article',
    headerName: 'Артикул',
    width: 150,
    valueGetter: (params) => params.row.attributes?.article,
  },
  {
    field: 'provider',
    headerName: 'Поставщик',
    width: 150,
    valueGetter: (params) =>
      params.row.attributes?.provider?.data?.attributes?.name,
  },
  {
    field: 'amount',
    headerName: 'Количество',
    width: 150,
    type: 'number',
    editable: true,
    valueGetter: (params) => params.row.attributes?.amount,
  },
  {
    field: 'delivered',
    headerName: 'Доставлен',
    width: 150,
    type: 'boolean',
    editable: true,
    valueGetter: (params) => params.row.attributes?.delivered,
  },
  {
    field: 'deliveryDate',
    headerName: 'Дата отправки',
    width: 150,
    valueGetter: (params) => params.row.attributes?.deliveryDate,
  },
  {
    field: 'contragent',
    headerName: 'Контрагент',
    width: 150,
    valueGetter: (params) =>
      params.row.attributes?.contragent?.data?.attributes?.name,
  },
  {
    field: 'createdAt',
    headerName: 'Дата создания',
    width: 150,
    valueGetter: (params) => params.row.attributes?.createdAt,
  },
];

export default function ProductsTable() {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any[]>([]);

  const { data, called, loading, refetch, reobserve } = useGetInvoicesQuery({
    variables: {
      filters: { name: { contains: '' } },
      pag: { page: 1, pageSize: 500 },
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEntity] = useDeleteInvoiceMutation({ fetchPolicy: 'no-cache' });
  const [updateEntity] = useUpdateInvoiceMutation({ fetchPolicy: 'no-cache' });

  // Запрос на удаление сущности из базы данных
  const handleDelete = () => {
    selected.map((number) =>
      deleteEntity({
        // Тело запроса
        variables: {
          id: data?.invoices?.data.find((item) => item.id === number)?.id ?? '',
        },
      })
    );
    refetch();
    reobserve();
  };

  // Запрос на обновление сущности в базе данных
  const handleUpdate = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: GridCellEditStopParams<any, any, any>['row']
  ) => {
    // Фильтрация по пустым полям
    const update = omitBy(
      pick({ ...params, amount: params.amount && parseInt(params.amount) }, [
        'name',
        'amount',
        'delivered',
      ]),
      isNil
    );

    updateEntity({
      // Тело запроса
      variables: {
        id: params.id ?? '',
        data: update,
      },
    });

    refetch();
    reobserve();
  };

  useEffect(() => {
    refetch();
  });

  const toggleModal = () => {
    setOpen((state) => !state);
  };

  if (!data || loading)
    return (
      <LinearProgress
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
      />
    );

  return (
    <Box sx={{ width: '100%' }}>
      <Dialog onClose={toggleModal} open={open}>
        <DialogContent>
          <CreateProductModal />
        </DialogContent>
      </Dialog>
      <Grid
        my={2}
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        item
        xs={12}
      >
        <Button onClick={toggleModal} variant="contained">
          Добавить <AddIcon />
        </Button>
        <IconButton disabled={selected.length < 0}>
          <Fab
            color={selected.length > 0 ? 'primary' : 'default'}
            onClick={handleDelete}
            size="small"
          >
            <DeleteIcon />
          </Fab>
        </IconButton>
      </Grid>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          height: window.innerHeight / 1.3,
          flexDirection: 'column',
        }}
      >
        <DataGrid
          processRowUpdate={(entity) => {
            handleUpdate(entity);
            return entity;
          }}
          loading={!data && called && loading}
          rows={data?.invoices?.data ?? []}
          columns={columns}
          onRowSelectionModelChange={setSelected}
          onFilterModelChange={console.log}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
}
