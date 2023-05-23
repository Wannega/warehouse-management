import { Controller, useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslationAuth } from 'src/hooks/use-translation';
import { Link as DOMLink, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Alert, Stack } from '@mui/material';
import { AuthLayout } from 'src/layouts/auth-layout';
import { useSignInMutation } from 'src/schemas/generated';
import { Routes } from 'src/routes';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const initialFormValues: FormValues = {
  email: '',
  password: '',
  rememberMe: false,
};

export const SignInPage: React.FC = () => {
  const { t } = useTranslationAuth();
  const [signIn, { loading, error }] = useSignInMutation();
  const [isCaptchaVisible, setVisible] = useState(false);
  const [isCaptchaPassed, setPassed] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialFormValues,
  });

  const handleFormSubmit = () => {
    signIn({
      variables: {
        input: {
          identifier: getValues().email,
          password: getValues().password,
        },
      },
    }).then(() => {
      setPassed(false);
      setVisible(false);
      navigate(Routes.PRODUCTS);
    });
  };

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
          <WarehouseIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('sign-in-title')}
        </Typography>
        {!isEmpty(error) && !loading && (
          <Stack mt={2} sx={{ width: '100%' }}>
            <Alert severity="error">
              Проверьте правильность указанных данных
            </Alert>
          </Stack>
        )}

        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();

            setVisible(true);

            if(isCaptchaPassed){
              handleFormSubmit();
            }
          }}
          sx={{ mt: 1 }}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, name, onChange } }) => (
              <TextField
                error={!isEmpty(error) || !!errors.email?.ref}
                margin="normal"
                required
                fullWidth
                label={t('email')}
                name={name}
                type="email"
                autoComplete="email"
                autoFocus
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, name, onChange } }) => (
              <TextField
                error={!isEmpty(error) || !!errors.password?.ref}
                margin="normal"
                required
                fullWidth
                label={t('password')}
                name={name}
                autoComplete="password"
                type="password"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="rememberMe"
            control={control}
            render={({ field: { value, name, onChange } }) => (
              <FormControlLabel
                name={name}
                onChange={onChange}
                control={<Checkbox value={value} />}
                label={t('remember-me')}
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
            {t('sign-in')}
          </Button>

          {isCaptchaVisible && (
            <ReCAPTCHA
              onChange={() => {
                setPassed(true)
              }}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            />
          )}
          {loading && (
            <LinearProgress
              style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
            />
          )}

          <Grid container>
            <Grid item xs>
              <Link variant="body2">
                <DOMLink to={Routes.FORGOT_PASSWORD}>
                  {t('forgot-password')}
                </DOMLink>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AuthLayout>
  );
};
