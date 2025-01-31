import * as React from 'react';
import 'dayjs/locale/de';
import { DemoContainer } from 'docsx/src/modules/components/DemoContainer';
import { deDE } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';

const germanLocale = deDE.components.MuiLocalizationProvider.defaultProps.localeText;
export default function FieldPlaceholder() {
  return (
    <DemoContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField label="English locale (default)" />
      </LocalizationProvider>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        // Define the date locale to have the right format `day.month.year`.
        adapterLocale="de"
        // Define the translations (component localization) to have the right placeholders.
        // (e.g. `JJJJ` for the year)
        localeText={germanLocale}
      >
        <DateField label="German locale" />
      </LocalizationProvider>
    </DemoContainer>
  );
}
