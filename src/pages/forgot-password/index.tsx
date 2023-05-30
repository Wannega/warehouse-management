import { AuthLayout } from 'src/layouts/auth-layout';
import { Controller, useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { isEmpty } from 'lodash';
import { Alert, Stack } from '@mui/material';
import { useTranslationAuth } from 'src/hooks/use-translation';
import { useForgotPasswordMutation } from 'src/schemas/generated';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

interface FormValues {
  email: string;
}

const initialFormValues: FormValues = {
  email: '',
};

export const ForgotPasswordPage: React.FC = () => {
  const { t } = useTranslationAuth();
  const [sendCode, { loading, error, data }] = useForgotPasswordMutation();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: initialFormValues,
  });

  const handleFormSubmit = (data: FormValues) =>
  // Отправка запроса сброса пароля
    sendCode({
      variables: { email: data.email },
    });

  return (
    <AuthLayout>
      <Box
        sx={{
          height: '100%',
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AlternateEmailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('forgot-password-title')}
        </Typography>

        {!isEmpty(error) && !loading && (
          <Stack mt={2} sx={{ width: '100%' }}>
            <Alert severity="error">{t('email-not-found')}</Alert>
          </Stack>
        )}

        {data && isEmpty(error) && !loading && (
          <Stack mt={2} sx={{ width: '100%' }}>
            <Alert severity="success">{t('email-send-success')}</Alert>
          </Stack>
        )}

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={{ mt: 1, width: '100%' }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field: { value, name, onChange } }) => (
              <TextField
                error={!isEmpty(error)}
                margin="normal"
                required
                fullWidth
                label={t('email')}
                name={name}
                autoComplete="email"
                autoFocus
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            disabled={loading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t('send-code')}
          </Button>
          {loading && (
            <LinearProgress
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
            />
          )}
        </Box>
      </Box>
    </AuthLayout>
  );
};
