import { useState } from 'react';
import Select from 'react-select';
import en from '../../assets/images/locale/england.png';
import it from '../../assets/images/locale/italy.png';
import sq from '../../assets/images/locale/albania.png';

const options = [
  { value: 'en', label: <img src={en} height="40px" width="40px" /> },
  { value: 'it', label: <img src={it} height="40px" width="40px" /> },
  { value: 'sq', label: <img src={sq} height="40px" width="40px" /> },
];

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    border: 'none',
    boxShadow: 'none',
    backgroundColor: '#2b2d53',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#ed806c' : '#2b2d53',
  }),
  control: provided => ({
    ...provided,
    marginTop: '5%',
    backgroundColor: '#2b2d53',
    border: 'none',
    boxShadow: 'none',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

function Locale() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  console.log(selectedOption.value);

  return (
    <div>
      <Select
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        isSearchable={false}
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default Locale;
