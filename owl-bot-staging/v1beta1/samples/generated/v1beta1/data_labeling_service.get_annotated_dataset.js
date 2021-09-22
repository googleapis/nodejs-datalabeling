// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START datalabeling_get_annotated_dataset_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the annotated dataset to get, format:
   *  projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
   *  {annotated_dataset_id}
   */
  // const name = 'abc123'

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function getAnnotatedDataset() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await datalabelingClient.getAnnotatedDataset(request);
    console.log(response);
  }

  getAnnotatedDataset();
  // [END datalabeling_get_annotated_dataset_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
