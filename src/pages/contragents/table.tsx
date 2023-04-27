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
  ContragentEntity,
  useDeleteContragentMutation,
  useGetContragentsQuery,
  useUpdateContragentMutation,
} from 'src/schemas/generated';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import { CreateProviderModal } from './create-modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { isNil, omit, omitBy, pick } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: GridColDef<ContragentEntity>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Имя',
    width: 200,
    editable: true,
    valueGetter: (params) => params.row.attributes?.name,
  },
  {
    field: 'location',
    headerName: 'Адрес',
    width: 200,
    editable: true,
    valueGetter: (params) => params.row.attributes?.location,
  },
  {
    field: 'inn',
    headerName: 'ИНН',
    width: 200,
    editable: true,
    valueGetter: (params) => params.row.attributes?.inn,
  },
  {
    field: 'category',
    headerName: 'Категория',
    width: 200,
    editable: true,
    valueGetter: (params) => params.row.attributes?.category,
  },
];

export default function ContragentsTable() {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selected, setSelected] = useState<any[]>([]);

  const { data, called, loading, refetch, reobserve } = useGetContragentsQuery({
    variables: {
      filters: { name: { contains: '' } },
      pag: { page: 1, pageSize: 500 },
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEntity] = useDeleteContragentMutation({
    fetchPolicy: 'no-cache',
  });
  const [updateEntity] = useUpdateContragentMutation({
    fetchPolicy: 'no-cache',
  });

  const handleDelete = () => {
    selected.map((number) =>
      deleteEntity({
        variables: {
          id:
            data?.contragents?.data.find((item) => item.id === number)?.id ??
            '',
        },
      })
    );
    refetch();
    reobserve()
  };

  const handleUpdate = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: GridCellEditStopParams<any, any, any>['row']
  ) => {
    const update = omit(omitBy(params, isNil), [
      'attributes',
      '__typename',
      'id',
    ]); // {b: 'Hello', c: 3}

    console.log(update);
    updateEntity({
      variables: {
        id: params.id ?? '',
        data: update,
      },
    });
    refetch();
    reobserve()
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
          <CreateProviderModal />
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
          rows={data?.contragents?.data ?? []}
          columns={columns}
          onRowSelectionModelChange={setSelected}
          onFilterModelChange={console.log}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
}
