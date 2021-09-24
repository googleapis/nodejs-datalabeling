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
  // [START datalabeling_v1beta1_generated_DataLabelingService_SearchEvaluations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Evaluation search parent (project ID). Format:
   *  "projects/<var>{project_id}</var>"
   */
  // const parent = 'abc123'
  /**
   *  Optional. To search evaluations, you can filter by the following:
   *  * evaluation<span>_</span>job.evaluation_job_id (the last part of
   *    [EvaluationJob.name][google.cloud.datalabeling.v1beta1.EvaluationJob.name])
   *  * evaluation<span>_</span>job.model_id (the <var>{model_name}</var> portion
   *    of [EvaluationJob.modelVersion][google.cloud.datalabeling.v1beta1.EvaluationJob.model_version])
   *  * evaluation<span>_</span>job.evaluation_job_run_time_start (Minimum
   *    threshold for the
   *    [evaluationJobRunTime][google.cloud.datalabeling.v1beta1.Evaluation.evaluation_job_run_time] that created
   *    the evaluation)
   *  * evaluation<span>_</span>job.evaluation_job_run_time_end (Maximum
   *    threshold for the
   *    [evaluationJobRunTime][google.cloud.datalabeling.v1beta1.Evaluation.evaluation_job_run_time] that created
   *    the evaluation)
   *  * evaluation<span>_</span>job.job_state ([EvaluationJob.state][google.cloud.datalabeling.v1beta1.EvaluationJob.state])
   *  * annotation<span>_</span>spec.display_name (the Evaluation contains a
   *    metric for the annotation spec with this
   *    [displayName][google.cloud.datalabeling.v1beta1.AnnotationSpec.display_name])
   *  To filter by multiple critiera, use the `AND` operator or the `OR`
   *  operator. The following examples shows a string that filters by several
   *  critiera:
   *  "evaluation<span>_</span>job.evaluation_job_id =
   *  <var>{evaluation_job_id}</var> AND evaluation<span>_</span>job.model_id =
   *  <var>{model_name}</var> AND
   *  evaluation<span>_</span>job.evaluation_job_run_time_start =
   *  <var>{timestamp_1}</var> AND
   *  evaluation<span>_</span>job.evaluation_job_run_time_end =
   *  <var>{timestamp_2}</var> AND annotation<span>_</span>spec.display_name =
   *  <var>{display_name}</var>"
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
   *  [nextPageToken][google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.next_page_token] of the response
   *  to a previous search request.
   *  If you don't specify this field, the API call requests the first page of
   *  the search.
   */
  // const pageToken = 'abc123'

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function searchEvaluations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datalabelingClient.searchEvaluationsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  searchEvaluations();
  // [END datalabeling_v1beta1_generated_DataLabelingService_SearchEvaluations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
