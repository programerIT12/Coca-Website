import intlTelInput from 'intl-tel-input/intlTelInputWithUtils';
import 'intl-tel-input/styles';

export const usePhone = () => {
  const input = document.querySelector('#phone');

  if (!input) return;

  intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (success) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => success(data.country_code))
        .catch(() => success('us'));
    },
  });
};
