import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { WorkspaceLayout } from 'src/layouts/workspace-layout';
import ProductsTable from './table';

export const ProductsPage: React.FC = () => {
  return (
    <WorkspaceLayout title={'Продукты'}>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProductsTable />
          </Grid>
        </Grid>
      </Container>
    </WorkspaceLayout>
  );
};
