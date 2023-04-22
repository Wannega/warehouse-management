import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { WorkspaceLayout } from 'src/layouts/workspace-layout';
import ProvidersTable from './table';

export const ProviderPage: React.FC = () => {
  return (
    <WorkspaceLayout title={'Поставщики'}>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12} xl={12} lg={12}>
            <ProvidersTable />
          </Grid>
        </Grid>
      </Container>
    </WorkspaceLayout>
  );
};
