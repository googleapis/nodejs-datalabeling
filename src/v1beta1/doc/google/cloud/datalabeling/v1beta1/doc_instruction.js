// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Instruction of how to perform the labeling task for human operators.
 * Currently only PDF instruction is supported.
 *
 * @property {string} name
 *   Output only. Instruction resource name, format:
 *   projects/{project_id}/instructions/{instruction_id}
 *
 * @property {string} displayName
 *   Required. The display name of the instruction. Maximum of 64 characters.
 *
 * @property {string} description
 *   Optional. User-provided description of the instruction.
 *   The description can be up to 10000 characters long.
 *
 * @property {Object} createTime
 *   Output only. Creation time of instruction.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. Last update time of instruction.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} dataType
 *   Required. The data type of this instruction.
 *
 *   The number should be among the values of [DataType]{@link google.cloud.datalabeling.v1beta1.DataType}
 *
 * @property {Object} csvInstruction
 *   Deprecated: this instruction format is not supported any more.
 *   Instruction from a CSV file, such as for classification task.
 *   The CSV file should have exact two columns, in the following format:
 *
 *   * The first column is labeled data, such as an image reference, text.
 *   * The second column is comma separated labels associated with data.
 *
 *   This object should have the same structure as [CsvInstruction]{@link google.cloud.datalabeling.v1beta1.CsvInstruction}
 *
 * @property {Object} pdfInstruction
 *   Instruction from a PDF document. The PDF should be in a Cloud Storage
 *   bucket.
 *
 *   This object should have the same structure as [PdfInstruction]{@link google.cloud.datalabeling.v1beta1.PdfInstruction}
 *
 * @property {string[]} blockingResources
 *   Output only. The names of any related resources that are blocking changes
 *   to the instruction.
 *
 * @typedef Instruction
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Instruction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/instruction.proto}
 */
const Instruction = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Deprecated: this instruction format is not supported any more.
 * Instruction from a CSV file.
 *
 * @property {string} gcsFileUri
 *   CSV file for the instruction. Only gcs path is allowed.
 *
 * @typedef CsvInstruction
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.CsvInstruction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/instruction.proto}
 */
const CsvInstruction = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Instruction from a PDF file.
 *
 * @property {string} gcsFileUri
 *   PDF file for the instruction. Only gcs path is allowed.
 *
 * @typedef PdfInstruction
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.PdfInstruction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/instruction.proto}
 */
const PdfInstruction = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};