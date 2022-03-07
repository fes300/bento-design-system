import { useState } from "react";
import {
  tableColumn,
  FormRow,
  SelectField,
  Stack,
  Table,
  TextField,
  IconInformative,
  IconWarning,
} from "../";
import { createComponentStories, formatMessage } from "../util";

const { defaultExport, createStory } = createComponentStories({
  component: Table,
  args: {},
});

export default defaultExport;

const exampleColumns = [
  tableColumn.button({
    headerLabel: formatMessage("Button"),
    accessor: "button",
    sticky: "left",
    disableSortBy: true,
    align: "center",
  }),
  tableColumn.text({
    headerLabel: formatMessage("Name"),
    accessor: "name",
  }),
  tableColumn.textWithIcon({
    headerLabel: formatMessage("Country"),
    accessor: "country",
    iconPosition: "right",
  }),
  tableColumn.number({
    headerLabel: formatMessage("Applications"),
    accessor: "applications",
    valueFormatter: (value) => formatMessage(Intl.NumberFormat("en").format(value)),
    align: "right",
  }),
  tableColumn.numberWithIcon({
    headerLabel: formatMessage("Value"),
    accessor: "value",
    valueFormatter: (value) => formatMessage(Intl.NumberFormat("en").format(value)),
    align: "right",
  }),
  tableColumn.label({
    headerLabel: formatMessage("Type"),
    accessor: "type",
  }),
  tableColumn.link({
    headerLabel: formatMessage("Website"),
    accessor: "website",
  }),
  tableColumn.icon({
    headerLabel: formatMessage("Alerts"),
    accessor: "alerts",
  }),
  tableColumn.chip({
    headerLabel: formatMessage("Status"),
    accessor: "status",
    align: "center",
  }),
];

const exampleData = [
  {
    name: formatMessage("Amazon"),
    country: {
      icon: IconInformative,
      text: formatMessage("US"),
    },
    button: {
      label: formatMessage("Row 1"),
      kind: "transparent",
      hierarchy: "primary",
      onPress: () => {},
    },
    status: { label: formatMessage("Active"), color: "green" },
    value: {
      numericValue: 100,
      icon: IconInformative,
    },
    type: formatMessage("Private"),
    website: { href: "http://www.amazon.com", label: formatMessage("Link") },
    alerts: IconWarning,
  },
  {
    name: formatMessage("Google"),
    country: {
      icon: IconInformative,
      text: formatMessage("US"),
    },
    button: {
      label: formatMessage("Row 2"),
      kind: "transparent",
      hierarchy: "primary",
      onPress: () => {},
    },
    applications: 10_000,
    status: { label: formatMessage("Paused"), color: "blue" },
    value: {
      numericValue: 150,
      icon: IconInformative,
    },
    type: formatMessage("Private"),
    website: { href: "http://www.google.com", label: formatMessage("Link") },
    alerts: null,
  },
  {
    name: formatMessage("Microsoft"),
    country: {
      icon: IconInformative,
      text: formatMessage("US"),
    },
    button: {
      label: formatMessage("Row 3"),
      kind: "transparent",
      hierarchy: "primary",
      onPress: () => {},
    },
    applications: 1_000,
    status: { label: formatMessage("Pending"), color: "yellow" },
    value: {
      numericValue: 120,
      icon: IconInformative,
    },
    type: formatMessage("Private"),
    website: { href: "http://www.microsoft.com", label: formatMessage("Link") },
    alerts: IconWarning,
  },
  {
    name: formatMessage("buildo"),
    country: {
      icon: null,
      text: formatMessage("IT"),
    },
    button: {
      label: formatMessage("Row 4"),
      kind: "transparent",
      hierarchy: "primary",
      onPress: () => {},
    },
    applications: 1_200,
    status: { label: formatMessage("Active"), color: "green" },
    type: formatMessage("Private"),
    website: { href: "http://www.buildo.io", label: formatMessage("Link") },
    alerts: null,
  },
  {
    name: formatMessage("Twitter"),
    country: {
      icon: IconInformative,
      text: formatMessage("US"),
    },
    button: {
      label: formatMessage("Row 5"),
      kind: "transparent",
      hierarchy: "primary",
      onPress: () => {},
    },
    applications: 12_000,
    status: { label: formatMessage("Paused"), color: "blue" },
    value: {
      numericValue: 137,
      icon: IconInformative,
    },
    type: formatMessage("Private"),
    website: { href: "http://www.twitter.com", label: formatMessage("Link") },
    alerts: null,
  },
] as const;

export const Simple = createStory({
  columns: exampleColumns,
  data: exampleData,
});

export const Empty = createStory({
  columns: exampleColumns,
  data: [],
});

export const WithFilter = (_args: Parameters<typeof createStory>[0]) => {
  function filterIfDefined<F>(filterValue: F | undefined, f: (filterValue: F) => boolean): boolean {
    return !filterValue || f(filterValue);
  }

  const statusOptions = [
    { label: formatMessage("Active"), value: "Active" } as const,
    { label: formatMessage("Paused"), value: "Paused" } as const,
    { label: formatMessage("Pending"), value: "Pending" } as const,
  ];
  type Status = typeof statusOptions[number]["value"];

  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | undefined>(undefined);

  const data = exampleData.filter(
    (row) =>
      filterIfDefined(statusFilter, (f) => row.status.label === f) &&
      filterIfDefined(nameFilter, (f) =>
        row.name.toLocaleLowerCase().includes(f.toLocaleLowerCase())
      )
  );

  return (
    <Stack space={40}>
      <FormRow>
        <TextField
          name="name"
          onBlur={() => {}}
          label={formatMessage("Name")}
          placeholder={formatMessage("Search by name")}
          value={nameFilter}
          onChange={setNameFilter}
        />
        <SelectField
          name="status"
          onBlur={() => {}}
          label={formatMessage("Status")}
          placeholder={formatMessage("Select a status to filter")}
          value={statusFilter}
          onChange={setStatusFilter}
          options={statusOptions}
        />
      </FormRow>
      <Table columns={exampleColumns} data={data} />
    </Stack>
  );
};
