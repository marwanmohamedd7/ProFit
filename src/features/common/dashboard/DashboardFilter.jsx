import FilterButtons from '../../../ui/FilterButtons';

function DashboardFilter() {
  return (
    <FilterButtons
      fiterBtns={{
        fiterFeild: "last",
        options: [
          { value: 'All', label: 'All' },
          { value: '7', label: 'Last 7 days' },
          { value: '30', label: 'Last 30 days' },
          { value: '90', label: 'Last 90 days' },
        ]
      }}
    />
  );
}

export default DashboardFilter;
