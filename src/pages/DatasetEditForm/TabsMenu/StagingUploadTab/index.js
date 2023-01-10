import React from 'react';
import { Field } from 'redux-form/immutable';
import { required } from 'utils/validations';
import { UniconnectDatasetChooseField } from 'components/Fields';

function StagingUploadTab() {
  return (
    <div className="tabs-block">
      <Field
        component={UniconnectDatasetChooseField}
        className="form__field form__field_small"
        name="filename"
        validate={[required]}
        pageSize={5}
      />
    </div>
  );
}

export default StagingUploadTab;
