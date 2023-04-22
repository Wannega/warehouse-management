import {
  Alert,
  Button,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { isEmpty } from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import { useCreateProviderMutation } from 'src/schemas/generated';

interface FormProps {
  name: string;
  location: string;
  inn: string;
  category: string;
}

export const CreateProviderModal: React.FC = () => {
  const { control, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      location: '',
      inn: '',
      name: '',
      category: '',
    },
  });

  const [createEntity, { data, loading, error }] = useCreateProviderMutation({
    fetchPolicy: 'no-cache',
  });

  const handleFormSubmit = (form: FormProps) =>
    createEntity({
      variables: {
        data: {
          ...form,
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
        <Typography variant="h5">Добавление поставщика</Typography>
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
        name={'location'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            id="outlined-select-currency"
            label="Адрес"
            helperText="Введите адрес"
          ></TextField>
        )}
      />
      <Controller
        name={'inn'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            type="number"
            onChange={onChange}
            id="outlined-select-currency"
            label="ИНН"
            helperText="Введите инн"
          ></TextField>
        )}
      />
      <Controller
        name={'category'}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <TextField
            name={name}
            value={value}
            type="number"
            onChange={onChange}
            id="outlined-select-currency"
            label="Категория"
            helperText="Введите категорию"
          ></TextField>
        )}
      />

      {loading && (
        <LinearProgress
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        />
      )}

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
