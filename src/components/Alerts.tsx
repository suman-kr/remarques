import * as React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

export const Alerts: React.FunctionComponent<Props> = (props) => {
  return (
    <MuiAlert
      elevation={6}
      variant='filled'
      {...props}
    />
  );
};

interface Props {
  onClose: () => void;
  severity: 'success' | 'info' | 'warning' | 'error';
}
