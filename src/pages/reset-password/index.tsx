import { AuthLayout } from 'src/layouts/auth-layout';
import { Controller, useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { delay, isEmpty } from 'lodash';
import { Alert, Stack } from '@mui/material';
import { useTranslationAuth } from 'src/hooks/use-translation';
import { useResetPasswordMutation } from 'src/schemas/generated';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Routes } from 'src/routes';

interface FormValues {
  password: string;
  passwordConfirmation: string;
  code: string;
}

const initialFormValues: FormValues = {
  password: '',
  passwordConfirmation: '',
  code: '',
};

export const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslationAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sendCode, { loading, error, data }] = useResetPasswordMutation();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      ...initialFormValues,
    },
  });

  const handleFormSubmit = (variables: FormValues) =>
    sendCode({
      variables: { ...variables, code: searchParams.get('code') ?? '' },
    }).then(() => delay(() => navigate(Routes.SIGN_IN), 3000));

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
          <KeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('reset-password-title')}
        </Typography>

        {!isEmpty(error) && !loading && (
          <Stack mt={2} sx={{ width: '100%' }}>
            <Alert severity="error">{t('email-not-found')}</Alert>
          </Stack>
        )}

        {data && isEmpty(error) && !loading && (
          <Stack mt={2} sx={{ width: '100%' }}>
            <Alert severity="success">{t('password-reset-success')}</Alert>
          </Stack>
        )}

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={{ mt: 1, width: '100%' }}
        >
          <Controller
            name="password"
            control={control}
            render={({ field: { value, name, onChange } }) => (
              <TextField
                error={!isEmpty(error)}
                margin="normal"
                required
                fullWidth
                label={t('password')}
                name={name}
                autoComplete="password"
                autoFocus
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field: { value, name, onChange } }) => (
              <TextField
                error={!isEmpty(error)}
                margin="normal"
                required
                fullWidth
                label={t('password-confirmation')}
                name={name}
                autoComplete="password"
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
            {t('reset')}
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
