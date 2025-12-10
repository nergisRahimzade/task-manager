import './App.css'
import { Buttons } from './assets/components/buttons/Buttons'
import { TextButtons } from './assets/components/buttons/text-buttons/TextButtons';
import { ContainedButtons } from './assets/components/buttons/contained-buttons/ContainedButtons';
import { OutlinedButtons } from './assets/components/buttons/outlined-buttons/OutlinedButtons';
import { ColoredButtons } from './assets/components/buttons/colored-buttons/ColoredButtons';
import { SizedButtons } from './assets/components/buttons/sized-buttons/SizedButtons';
import { ButtonsWithIcons } from './assets/components/buttons/icon-buttons/ButtonsWithIcons';
import { IconButtons } from './assets/components/buttons/icon-buttons/IconButtons';
import { IconSizedButtons } from './assets/components/buttons/icon-buttons/IconSizedButtons';
import { ColoredIconButtons } from './assets/components/buttons/icon-buttons/ColoredIconButtons';
import { LoadingButtons } from './assets/components/buttons/loading-buttons/LoadingButtons';
import { BadgeButtons } from './assets/components/buttons/badged-buttons/BadgeButtons';
import { SizedLoadingButtons } from './assets/components/buttons/loading-buttons/SizedLoadingButtons';
import { TransitionedLoadingButtons } from './assets/components/buttons/loading-buttons/TransitionedLoadingButtons';

import { TextFields } from './assets/components/text-fields/TextFields';
import { FormPropTextFields } from './assets/components/text-fields/form-prop-text-fields/FormPropTextFields.tsx';
import { ValidationTextFields } from './assets/components/text-fields/validation-text-fields/ValidationTextFields.tsx';
import { MultilineTextFields } from './assets/components/text-fields/multiline-text-fields/MultilineTextFields.tsx';
import { SelectTextFields } from './assets/components/text-fields/select-text-fields/SelectTextFields.tsx';
import { IconedTextFields } from './assets/components/text-fields/iconed-text-fields/IconedTextFields.tsx';
import { SizedTextFields } from './assets/components/text-fields/sized-text-fields/SizedTextFields.tsx';
import { MarginedTextFields } from './assets/components/text-fields/margined-text-fields/MarginedTextFields.tsx';
import { ColoredTextFields } from './assets/components/text-fields/colored-text-fields/ColoredTextFields.tsx';

import { Checkboxes } from './assets/components/checkboxes/Checkbox.tsx';
import { LabeledCheckboxes } from './assets/components/checkboxes/labeled-checkboxes/LabeledCheckboxes.tsx';
import { SizedCheckboxes } from './assets/components/checkboxes/sized-checkboxes/SizedCheckboxes.tsx';
import { ColoredCheckboxes } from './assets/components/checkboxes/colored-checkboxes/ColoredCheckboxes.tsx';
import { IndeterminateCheckBox } from '@mui/icons-material';
import { IconCheckboxes } from './assets/components/checkboxes/icon-checkboxes/IconCheckboxes.tsx';
import { ControlledCheckboxes } from './assets/components/checkboxes/controlled-checkboxes/ControlledCheckboxes.tsx';
import { FormGroupCheckboxes } from './assets/components/checkboxes/form-group-checkboxes/FormGroupCheckboxes.tsx';
import { LabelPlacementCheckboxes } from './assets/components/checkboxes/labeled-checkboxes/LabelPlacementCheckboxes.tsx';

import { Selects } from './assets/components/selects/Selects.tsx';
import { HelperTextSelects } from './assets/components/selects/HelperTextSelects.tsx';
import { AutoWidthSelects } from './assets/components/selects/sized-selects/AutoWidthSelects.tsx';
import { SizedSelects } from './assets/components/selects/sized-selects/SizedSelects.tsx';
import { PropsSelects } from './assets/components/selects/PropsSelects.tsx';
import { NativeSelects } from './assets/components/selects/NativeSelects.tsx';

import { RadioGroups } from './assets/components/radio-groups/RadioGroups.tsx';
import { DirectionRadioGroups } from './assets/components/radio-groups/direction-radio-groups/DirectionRadioGroups.tsx';
import { ControlledRadioGroups } from './assets/components/radio-groups/controlled-radio-groups/ControlledRadioGroups.tsx';
import { StandaloneRadioGroups } from './assets/components/radio-groups/standalone-radio-groups/StandaloneRadioGroups.tsx';
import { SizedRadioGroups } from './assets/components/radio-groups/sized-radio-groups/SizedRadioGroups.tsx';
import { ColoredRadioGroups } from './assets/components/radio-groups/colored-radio-groups/ColoredRadioGroups.tsx';
import { PositionRadioGroups } from './assets/components/radio-groups/position-radio-groups/PositionRadioGroups.tsx';
import { ErrorRadioGroups } from './assets/components/radio-groups/error-radio-groups/ErrorRadioGroups.tsx';

import { NestedLists } from './assets/components/lists/NestedLists.tsx';
import { FolderLists } from './assets/components/lists/folder-lists/FolderLists.tsx';
import { InteractiveLists } from './assets/components/lists/interactive-lists/InteractiveLists.tsx';
import { SelectedItemLists } from './assets/components/lists/SelectedItemLists.tsx';
import { AlignedItemsLists } from './assets/components/lists/aligned-items-lists/AlignedItemsLists.tsx';
import { CheckboxLists } from './assets/components/lists/list-controls/CheckboxLists.tsx';
import { SwitchLists } from './assets/components/lists/list-controls/SwitchLists.tsx';
import { StickSubheaderLists } from './assets/components/lists/sticky-subheader-lists/StickySubheaderLists.tsx';

import { DataTables } from './assets/components/tables/DataTables.tsx';

import { BasicAlerts } from './assets/components/alerts/BasicAlerts.tsx';

function App() {
  return (
    <div className='app'>
      <div className='buttons-section'>
        <Buttons />
        <TextButtons />
        <ContainedButtons />
        <OutlinedButtons />
        <ColoredButtons />
        <SizedButtons />
        <ButtonsWithIcons />
        <IconButtons />
        <IconSizedButtons />
        <ColoredIconButtons />
        <LoadingButtons />
        <BadgeButtons />
        <SizedLoadingButtons />
        <TransitionedLoadingButtons />
      </div>

      <div className='textfields-section'>
        <TextFields />
        <FormPropTextFields />
        <ValidationTextFields />
        <MultilineTextFields />
        <SelectTextFields />
        <IconedTextFields />
        <SizedTextFields />
        <MarginedTextFields />
        <ColoredTextFields />
      </div>

      <div className='chechboxes-section'>
        <Checkboxes />
        <LabeledCheckboxes />
        <SizedCheckboxes />
        <ColoredCheckboxes />
        <IndeterminateCheckBox />
        <IconCheckboxes />
        <ControlledCheckboxes />
        <FormGroupCheckboxes />
        <LabelPlacementCheckboxes />
      </div>

      <div className='selects-section'>
        <Selects />
        <HelperTextSelects />
        <AutoWidthSelects />
        <SizedSelects />
        <PropsSelects />
        <NativeSelects />
      </div>

      <div className='radio-groups-section'>
        <RadioGroups />
        <DirectionRadioGroups />
        <ControlledRadioGroups />
        <StandaloneRadioGroups />
        <SizedRadioGroups />
        <ColoredRadioGroups />
        <PositionRadioGroups />
        <ErrorRadioGroups />
      </div>

      <div className='lists-section'>
        <NestedLists />
        <FolderLists />
        <InteractiveLists />
        <SelectedItemLists />
        <AlignedItemsLists />
        <CheckboxLists />
        <SwitchLists />
        <StickSubheaderLists />
      </div>

      <div className='tables-section'>
        <DataTables />
      </div>

      <div className='alerts-section'>
        <BasicAlerts />
      </div>
    </div>
  );
}

export default App
