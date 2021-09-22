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

function main(parent) {
  // [START datalabeling_list_evaluation_jobs_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Evaluation job resource parent. Format:
   *  "projects/<var>{project_id}</var>"
   */
  // const parent = 'abc123'
  /**
   *  Optional. You can filter the jobs to list by model_id (also known as
   *  model_name, as described in
   *  [EvaluationJob.modelVersion][google.cloud.datalabeling.v1beta1.EvaluationJob.model_version]) or by
   *  evaluation job state (as described in [EvaluationJob.state][google.cloud.datalabeling.v1beta1.EvaluationJob.state]). To filter
   *  by both criteria, use the `AND` operator or the `OR` operator. For example,
   *  you can use the following string for your filter:
   *  "evaluation<span>_</span>job.model_id = <var>{model_name}</var> AND
   *  evaluation<span>_</span>job.state = <var>{evaluation_job_state}</var>"
   */
  // const filter = 'abc123'
  /**
   *  Optional. Requested page size. Server may return fewer results than
   *  requested. Default value is 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token identifying a page of results for the server to return.
   *  Typically obtained by the
   *  [nextPageToken][google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.next_page_token] in the response
   *  to the previous request. The request returns the first page if this is
   *  empty.
   */
  // const pageToken = 'abc123'

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function listEvaluationJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datalabelingClient.listEvaluationJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listEvaluationJobs();
  // [END datalabeling_list_evaluation_jobs_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
