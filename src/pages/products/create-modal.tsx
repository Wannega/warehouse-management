import {
  Alert,
  Autocomplete,
  Button,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { isEmpty } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import {
  useCreateInvoiceMutation,
  useGetContragentsQuery,
  useGetProvidersQuery,
} from 'src/schemas/generated';

interface FormProps {
  contragent: string;
  provider: string;
  amount: number;
  name: string;
  article: string;
  deliveryDate: string | null;
}

export const CreateProductModal: React.FC = () => {
  const { control, setValue, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      contragent: '',
      provider: '',
      amount: 0,
      name: '',
      article: '',
      deliveryDate: null,
    },
  });

  const [createEntity, { data, loading, error }] = useCreateInvoiceMutation({fetchPolicy: 'no-cache'});

  const { data: contragents } = useGetContragentsQuery({
    variables: {
      filters: { name: { contains: '' } },
      pag: { page: 1, pageSize: 500 },
    },
  });
  const { data: providers } = useGetProvidersQuery({
    variables: {
      filters: { name: { contains: '' } },
      pag: { page: 1, pageSize: 500 },
    },
  });

  const handleFormSubmit = (form: FormProps) =>
    createEntity({
      variables: {
        data: {
          ...form,
          amount: Number(form.amount),
          deliveryDate: form.deliveryDate,
          contragent:
            contragents?.contragents?.data.find(
              (item) => item.attributes?.name === form.contragent
            )?.id ?? '',
          provider:
            providers?.providers?.data.find(
              (item) => item.attributes?.name === form.provider
            )?.id ?? '',
        },
      },
    });

  return (
    <Grid
      width={500}
      container
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      p={2}
    >
      <Grid item>
        <Typography variant="h5">Добавление продукта</Typography>
      </Grid>

      {!isEmpty(error) && !loading && (
        <Stack mt={2} sx={{ width: '100%' }}>
          <Alert severity="error">
            Проверьте правильность указанных данных
          </Alert>
        </Stack>
      )}
      {isEmpty(error) && !loading && data && (
        <Stack mt={2} sx={{ width: '100%' }}>
          <Alert severity="success">Продукт успешно создан</Alert>
        </Stack>
      )}

      <Controller
        name={'name'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="Имя"
            helperText="Введите имя продукта"
          ></TextField>
        )}
      />
      <Controller
        name={'article'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="Артикль"
            helperText="Введите артикль продукта"
          ></TextField>
        )}
      />
      <Controller
        name={'amount'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            type="number"
            onChange={onChange}
            id="outlined-select-currency"
            label="Количество"
            helperText="Введите количество продуктов"
          ></TextField>
        )}
      />
      <Controller
        name={'contragent'}
        control={control}
        render={({ field: { value, name } }) => (
          <Autocomplete
            value={value}
            onChange={(_, value) => setValue('contragent', value ?? '')}
            options={
              contragents?.contragents?.data.map(
                (item) => item.attributes?.name
              ) ?? []
            }
            renderInput={(params) => (
              <TextField
                {...params}
                name={name}
                id="outlined-select-currency"
                label="Контрагент"
                helperText="Выберите контрагента"
                fullWidth
              />
            )}
          />
        )}
      />
      <Controller
        name={'provider'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <Autocomplete
            value={value}
            onChange={(_, value) => setValue('provider', value ?? '')}
            options={
              providers?.providers?.data.map((item) => item.attributes?.name) ??
              []
            }
            renderInput={(params) => (
              <TextField
                {...params}
                name={name}
                id="outlined-select-currency"
                label="Поставщик"
                helperText="Выберите поставщика"
                fullWidth
              />
            )}
          />
        )}
      />

      {loading && (
        <LinearProgress
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        />
      )}

      <Controller
        name={'deliveryDate'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            onChange={onChange}
            value={value}
            label="Выберите дату отправки"
          />
        )}
      />
      <Button
        variant="contained"
        type="submit"
        onClick={handleSubmit(handleFormSubmit)}
      >
        Создать
      </Button>
    </Grid>
  );
};
