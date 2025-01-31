---
product: date-pickers
title: React Date Time Picker component
components: NextDateTimePicker, DesktopNextDateTimePicker, MobileNextDateTimePicker, StaticNextDateTimePicker
githubLabel: 'component: DateTimePicker'
packageName: '@mui/x-date-pickers'
materialDesign: https://m2.material.io/components/date-pickers
---

# Date Time Picker

<p class="description">The Date Time Picker component let the user select a date and time.</p>

:::warning
The new Date Time Pickers are unstable.
They might receive breaking changes on their props to have the best component possible by the time of the stable release.

They will be renamed at the end of the v6 beta phase to have the same name as the current legacy pickers
(`NextDateTimePicker` will become `DateTimePicker`, ...)
:::

## Basic usage

{{"demo": "BasicDateTimePicker.js"}}

## Component composition

The component is built using the `DateTimeField` for the keyboard editing, the `DateCalendar` for the date view editing and the `TimeClock` for the time view editing.
All the documented props of those three components can also be passed to the Date Time Picker component.

Check-out their documentation page for more information:

- [Date Field](/x/react-date-pickers/date-field/)
- [Date Calendar](/x/react-date-pickers/date-calendar/)
- [Time Clock](/x/react-date-pickers/time-clock/)

## Uncontrolled vs. Controlled

The component can be uncontrolled or controlled

{{"demo": "DateTimePickerValue.js"}}

## Available components

The component is available in four variants:

- The `DesktopNextDateTimePicker` component which works best for mouse devices and large screens.
  It renders the views inside a popover and allows editing values directly inside the field.

- The `MobileNextDateTimePicker` component which works best for touch devices and small screens.
  It renders the view inside a modal and does not allow editing values directly inside the field.

- The `NextDateTimePicker` component which renders `DesktopNextDateTimePicker` or `MobileNextDateTimePicker` depending on the device it runs on.

- The `StaticDateTimePicker` component which renders without the popover/modal and field.

{{"demo": "ResponsiveDateTimePickers.js"}}

By default, the `NextDateTimePicker` component renders the desktop version if the media query [`@media (pointer: fine)`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) matches.
This can be customized with the `desktopModeMediaQuery` prop.

:::warning
Responsive components can suffer some inconsistencies between testing environments if media query is not supported.
Please refer to [this section](/x/react-date-pickers/getting-started/#testing-caveats) for solutions.
:::

## Form props

The component can be disabled or read-only.

{{"demo": "FormPropsDateTimePickers.js"}}

## Views

The component supports six views: `day`, `month`, `year`, `hours`, `minutes` and `seconds`.

By default, the `year`, `day`, `hours`, and `minutes` views are enabled.
Use the `views` prop to change this behavior:

{{"demo": "DateTimePickerViews.js"}}

By default, the component renders the `day` view on mount.
Use the `openTo` prop to change this behavior:

{{"demo": "DateTimePickerOpenTo.js"}}

:::success
The views will appear in the order defined by the `views` array.
If the view defined in `openTo` is not the first view, then the views before will not be included in the default flow
(e.g. view the default behaviors, the `year` is only accessible when clicking on the toolbar).
:::

## Landscape orientation

By default, the Date Time Picker component automatically sets the orientation based on the `window.orientation` value.

You can force a specific orientation using the `orientation` prop.

{{"demo": "StaticDateTimePickerLandscape.js", "bg": true}}

## Validation

You can find the documentation in the [Validation page](/x/react-date-pickers/validation/)

## Localization

You can find the documentation about localization in the [Date localization](/x/react-date-pickers/adapters-locale/) and [Component localization](/x/react-date-pickers/localization/).
