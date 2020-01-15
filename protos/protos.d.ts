// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace datalabeling. */
        namespace datalabeling {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a DataLabelingService */
                class DataLabelingService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataLabelingService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataLabelingService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataLabelingService;

                    /**
                     * Calls CreateDataset.
                     * @param request CreateDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dataset
                     */
                    public createDataset(request: google.cloud.datalabeling.v1beta1.ICreateDatasetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.CreateDatasetCallback): void;

                    /**
                     * Calls CreateDataset.
                     * @param request CreateDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public createDataset(request: google.cloud.datalabeling.v1beta1.ICreateDatasetRequest): Promise<google.cloud.datalabeling.v1beta1.Dataset>;

                    /**
                     * Calls GetDataset.
                     * @param request GetDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dataset
                     */
                    public getDataset(request: google.cloud.datalabeling.v1beta1.IGetDatasetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetDatasetCallback): void;

                    /**
                     * Calls GetDataset.
                     * @param request GetDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public getDataset(request: google.cloud.datalabeling.v1beta1.IGetDatasetRequest): Promise<google.cloud.datalabeling.v1beta1.Dataset>;

                    /**
                     * Calls ListDatasets.
                     * @param request ListDatasetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDatasetsResponse
                     */
                    public listDatasets(request: google.cloud.datalabeling.v1beta1.IListDatasetsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListDatasetsCallback): void;

                    /**
                     * Calls ListDatasets.
                     * @param request ListDatasetsRequest message or plain object
                     * @returns Promise
                     */
                    public listDatasets(request: google.cloud.datalabeling.v1beta1.IListDatasetsRequest): Promise<google.cloud.datalabeling.v1beta1.ListDatasetsResponse>;

                    /**
                     * Calls DeleteDataset.
                     * @param request DeleteDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteDataset(request: google.cloud.datalabeling.v1beta1.IDeleteDatasetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteDatasetCallback): void;

                    /**
                     * Calls DeleteDataset.
                     * @param request DeleteDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDataset(request: google.cloud.datalabeling.v1beta1.IDeleteDatasetRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ImportData.
                     * @param request ImportDataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importData(request: google.cloud.datalabeling.v1beta1.IImportDataRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ImportDataCallback): void;

                    /**
                     * Calls ImportData.
                     * @param request ImportDataRequest message or plain object
                     * @returns Promise
                     */
                    public importData(request: google.cloud.datalabeling.v1beta1.IImportDataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportData.
                     * @param request ExportDataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportData(request: google.cloud.datalabeling.v1beta1.IExportDataRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ExportDataCallback): void;

                    /**
                     * Calls ExportData.
                     * @param request ExportDataRequest message or plain object
                     * @returns Promise
                     */
                    public exportData(request: google.cloud.datalabeling.v1beta1.IExportDataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetDataItem.
                     * @param request GetDataItemRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataItem
                     */
                    public getDataItem(request: google.cloud.datalabeling.v1beta1.IGetDataItemRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetDataItemCallback): void;

                    /**
                     * Calls GetDataItem.
                     * @param request GetDataItemRequest message or plain object
                     * @returns Promise
                     */
                    public getDataItem(request: google.cloud.datalabeling.v1beta1.IGetDataItemRequest): Promise<google.cloud.datalabeling.v1beta1.DataItem>;

                    /**
                     * Calls ListDataItems.
                     * @param request ListDataItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDataItemsResponse
                     */
                    public listDataItems(request: google.cloud.datalabeling.v1beta1.IListDataItemsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListDataItemsCallback): void;

                    /**
                     * Calls ListDataItems.
                     * @param request ListDataItemsRequest message or plain object
                     * @returns Promise
                     */
                    public listDataItems(request: google.cloud.datalabeling.v1beta1.IListDataItemsRequest): Promise<google.cloud.datalabeling.v1beta1.ListDataItemsResponse>;

                    /**
                     * Calls GetAnnotatedDataset.
                     * @param request GetAnnotatedDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotatedDataset
                     */
                    public getAnnotatedDataset(request: google.cloud.datalabeling.v1beta1.IGetAnnotatedDatasetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetAnnotatedDatasetCallback): void;

                    /**
                     * Calls GetAnnotatedDataset.
                     * @param request GetAnnotatedDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public getAnnotatedDataset(request: google.cloud.datalabeling.v1beta1.IGetAnnotatedDatasetRequest): Promise<google.cloud.datalabeling.v1beta1.AnnotatedDataset>;

                    /**
                     * Calls ListAnnotatedDatasets.
                     * @param request ListAnnotatedDatasetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAnnotatedDatasetsResponse
                     */
                    public listAnnotatedDatasets(request: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListAnnotatedDatasetsCallback): void;

                    /**
                     * Calls ListAnnotatedDatasets.
                     * @param request ListAnnotatedDatasetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAnnotatedDatasets(request: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsRequest): Promise<google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse>;

                    /**
                     * Calls DeleteAnnotatedDataset.
                     * @param request DeleteAnnotatedDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAnnotatedDataset(request: google.cloud.datalabeling.v1beta1.IDeleteAnnotatedDatasetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteAnnotatedDatasetCallback): void;

                    /**
                     * Calls DeleteAnnotatedDataset.
                     * @param request DeleteAnnotatedDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAnnotatedDataset(request: google.cloud.datalabeling.v1beta1.IDeleteAnnotatedDatasetRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls LabelImage.
                     * @param request LabelImageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public labelImage(request: google.cloud.datalabeling.v1beta1.ILabelImageRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.LabelImageCallback): void;

                    /**
                     * Calls LabelImage.
                     * @param request LabelImageRequest message or plain object
                     * @returns Promise
                     */
                    public labelImage(request: google.cloud.datalabeling.v1beta1.ILabelImageRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls LabelVideo.
                     * @param request LabelVideoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public labelVideo(request: google.cloud.datalabeling.v1beta1.ILabelVideoRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.LabelVideoCallback): void;

                    /**
                     * Calls LabelVideo.
                     * @param request LabelVideoRequest message or plain object
                     * @returns Promise
                     */
                    public labelVideo(request: google.cloud.datalabeling.v1beta1.ILabelVideoRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls LabelText.
                     * @param request LabelTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public labelText(request: google.cloud.datalabeling.v1beta1.ILabelTextRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.LabelTextCallback): void;

                    /**
                     * Calls LabelText.
                     * @param request LabelTextRequest message or plain object
                     * @returns Promise
                     */
                    public labelText(request: google.cloud.datalabeling.v1beta1.ILabelTextRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetExample.
                     * @param request GetExampleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Example
                     */
                    public getExample(request: google.cloud.datalabeling.v1beta1.IGetExampleRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetExampleCallback): void;

                    /**
                     * Calls GetExample.
                     * @param request GetExampleRequest message or plain object
                     * @returns Promise
                     */
                    public getExample(request: google.cloud.datalabeling.v1beta1.IGetExampleRequest): Promise<google.cloud.datalabeling.v1beta1.Example>;

                    /**
                     * Calls ListExamples.
                     * @param request ListExamplesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListExamplesResponse
                     */
                    public listExamples(request: google.cloud.datalabeling.v1beta1.IListExamplesRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListExamplesCallback): void;

                    /**
                     * Calls ListExamples.
                     * @param request ListExamplesRequest message or plain object
                     * @returns Promise
                     */
                    public listExamples(request: google.cloud.datalabeling.v1beta1.IListExamplesRequest): Promise<google.cloud.datalabeling.v1beta1.ListExamplesResponse>;

                    /**
                     * Calls CreateAnnotationSpecSet.
                     * @param request CreateAnnotationSpecSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotationSpecSet
                     */
                    public createAnnotationSpecSet(request: google.cloud.datalabeling.v1beta1.ICreateAnnotationSpecSetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.CreateAnnotationSpecSetCallback): void;

                    /**
                     * Calls CreateAnnotationSpecSet.
                     * @param request CreateAnnotationSpecSetRequest message or plain object
                     * @returns Promise
                     */
                    public createAnnotationSpecSet(request: google.cloud.datalabeling.v1beta1.ICreateAnnotationSpecSetRequest): Promise<google.cloud.datalabeling.v1beta1.AnnotationSpecSet>;

                    /**
                     * Calls GetAnnotationSpecSet.
                     * @param request GetAnnotationSpecSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotationSpecSet
                     */
                    public getAnnotationSpecSet(request: google.cloud.datalabeling.v1beta1.IGetAnnotationSpecSetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetAnnotationSpecSetCallback): void;

                    /**
                     * Calls GetAnnotationSpecSet.
                     * @param request GetAnnotationSpecSetRequest message or plain object
                     * @returns Promise
                     */
                    public getAnnotationSpecSet(request: google.cloud.datalabeling.v1beta1.IGetAnnotationSpecSetRequest): Promise<google.cloud.datalabeling.v1beta1.AnnotationSpecSet>;

                    /**
                     * Calls ListAnnotationSpecSets.
                     * @param request ListAnnotationSpecSetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAnnotationSpecSetsResponse
                     */
                    public listAnnotationSpecSets(request: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListAnnotationSpecSetsCallback): void;

                    /**
                     * Calls ListAnnotationSpecSets.
                     * @param request ListAnnotationSpecSetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAnnotationSpecSets(request: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsRequest): Promise<google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse>;

                    /**
                     * Calls DeleteAnnotationSpecSet.
                     * @param request DeleteAnnotationSpecSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAnnotationSpecSet(request: google.cloud.datalabeling.v1beta1.IDeleteAnnotationSpecSetRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteAnnotationSpecSetCallback): void;

                    /**
                     * Calls DeleteAnnotationSpecSet.
                     * @param request DeleteAnnotationSpecSetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAnnotationSpecSet(request: google.cloud.datalabeling.v1beta1.IDeleteAnnotationSpecSetRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateInstruction.
                     * @param request CreateInstructionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstruction(request: google.cloud.datalabeling.v1beta1.ICreateInstructionRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.CreateInstructionCallback): void;

                    /**
                     * Calls CreateInstruction.
                     * @param request CreateInstructionRequest message or plain object
                     * @returns Promise
                     */
                    public createInstruction(request: google.cloud.datalabeling.v1beta1.ICreateInstructionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetInstruction.
                     * @param request GetInstructionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instruction
                     */
                    public getInstruction(request: google.cloud.datalabeling.v1beta1.IGetInstructionRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetInstructionCallback): void;

                    /**
                     * Calls GetInstruction.
                     * @param request GetInstructionRequest message or plain object
                     * @returns Promise
                     */
                    public getInstruction(request: google.cloud.datalabeling.v1beta1.IGetInstructionRequest): Promise<google.cloud.datalabeling.v1beta1.Instruction>;

                    /**
                     * Calls ListInstructions.
                     * @param request ListInstructionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstructionsResponse
                     */
                    public listInstructions(request: google.cloud.datalabeling.v1beta1.IListInstructionsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListInstructionsCallback): void;

                    /**
                     * Calls ListInstructions.
                     * @param request ListInstructionsRequest message or plain object
                     * @returns Promise
                     */
                    public listInstructions(request: google.cloud.datalabeling.v1beta1.IListInstructionsRequest): Promise<google.cloud.datalabeling.v1beta1.ListInstructionsResponse>;

                    /**
                     * Calls DeleteInstruction.
                     * @param request DeleteInstructionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteInstruction(request: google.cloud.datalabeling.v1beta1.IDeleteInstructionRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteInstructionCallback): void;

                    /**
                     * Calls DeleteInstruction.
                     * @param request DeleteInstructionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstruction(request: google.cloud.datalabeling.v1beta1.IDeleteInstructionRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetEvaluation.
                     * @param request GetEvaluationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Evaluation
                     */
                    public getEvaluation(request: google.cloud.datalabeling.v1beta1.IGetEvaluationRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetEvaluationCallback): void;

                    /**
                     * Calls GetEvaluation.
                     * @param request GetEvaluationRequest message or plain object
                     * @returns Promise
                     */
                    public getEvaluation(request: google.cloud.datalabeling.v1beta1.IGetEvaluationRequest): Promise<google.cloud.datalabeling.v1beta1.Evaluation>;

                    /**
                     * Calls SearchEvaluations.
                     * @param request SearchEvaluationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchEvaluationsResponse
                     */
                    public searchEvaluations(request: google.cloud.datalabeling.v1beta1.ISearchEvaluationsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.SearchEvaluationsCallback): void;

                    /**
                     * Calls SearchEvaluations.
                     * @param request SearchEvaluationsRequest message or plain object
                     * @returns Promise
                     */
                    public searchEvaluations(request: google.cloud.datalabeling.v1beta1.ISearchEvaluationsRequest): Promise<google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse>;

                    /**
                     * Calls SearchExampleComparisons.
                     * @param request SearchExampleComparisonsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchExampleComparisonsResponse
                     */
                    public searchExampleComparisons(request: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.SearchExampleComparisonsCallback): void;

                    /**
                     * Calls SearchExampleComparisons.
                     * @param request SearchExampleComparisonsRequest message or plain object
                     * @returns Promise
                     */
                    public searchExampleComparisons(request: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsRequest): Promise<google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse>;

                    /**
                     * Calls CreateEvaluationJob.
                     * @param request CreateEvaluationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EvaluationJob
                     */
                    public createEvaluationJob(request: google.cloud.datalabeling.v1beta1.ICreateEvaluationJobRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.CreateEvaluationJobCallback): void;

                    /**
                     * Calls CreateEvaluationJob.
                     * @param request CreateEvaluationJobRequest message or plain object
                     * @returns Promise
                     */
                    public createEvaluationJob(request: google.cloud.datalabeling.v1beta1.ICreateEvaluationJobRequest): Promise<google.cloud.datalabeling.v1beta1.EvaluationJob>;

                    /**
                     * Calls UpdateEvaluationJob.
                     * @param request UpdateEvaluationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EvaluationJob
                     */
                    public updateEvaluationJob(request: google.cloud.datalabeling.v1beta1.IUpdateEvaluationJobRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.UpdateEvaluationJobCallback): void;

                    /**
                     * Calls UpdateEvaluationJob.
                     * @param request UpdateEvaluationJobRequest message or plain object
                     * @returns Promise
                     */
                    public updateEvaluationJob(request: google.cloud.datalabeling.v1beta1.IUpdateEvaluationJobRequest): Promise<google.cloud.datalabeling.v1beta1.EvaluationJob>;

                    /**
                     * Calls GetEvaluationJob.
                     * @param request GetEvaluationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EvaluationJob
                     */
                    public getEvaluationJob(request: google.cloud.datalabeling.v1beta1.IGetEvaluationJobRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.GetEvaluationJobCallback): void;

                    /**
                     * Calls GetEvaluationJob.
                     * @param request GetEvaluationJobRequest message or plain object
                     * @returns Promise
                     */
                    public getEvaluationJob(request: google.cloud.datalabeling.v1beta1.IGetEvaluationJobRequest): Promise<google.cloud.datalabeling.v1beta1.EvaluationJob>;

                    /**
                     * Calls PauseEvaluationJob.
                     * @param request PauseEvaluationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public pauseEvaluationJob(request: google.cloud.datalabeling.v1beta1.IPauseEvaluationJobRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.PauseEvaluationJobCallback): void;

                    /**
                     * Calls PauseEvaluationJob.
                     * @param request PauseEvaluationJobRequest message or plain object
                     * @returns Promise
                     */
                    public pauseEvaluationJob(request: google.cloud.datalabeling.v1beta1.IPauseEvaluationJobRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ResumeEvaluationJob.
                     * @param request ResumeEvaluationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public resumeEvaluationJob(request: google.cloud.datalabeling.v1beta1.IResumeEvaluationJobRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ResumeEvaluationJobCallback): void;

                    /**
                     * Calls ResumeEvaluationJob.
                     * @param request ResumeEvaluationJobRequest message or plain object
                     * @returns Promise
                     */
                    public resumeEvaluationJob(request: google.cloud.datalabeling.v1beta1.IResumeEvaluationJobRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls DeleteEvaluationJob.
                     * @param request DeleteEvaluationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteEvaluationJob(request: google.cloud.datalabeling.v1beta1.IDeleteEvaluationJobRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.DeleteEvaluationJobCallback): void;

                    /**
                     * Calls DeleteEvaluationJob.
                     * @param request DeleteEvaluationJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEvaluationJob(request: google.cloud.datalabeling.v1beta1.IDeleteEvaluationJobRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListEvaluationJobs.
                     * @param request ListEvaluationJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEvaluationJobsResponse
                     */
                    public listEvaluationJobs(request: google.cloud.datalabeling.v1beta1.IListEvaluationJobsRequest, callback: google.cloud.datalabeling.v1beta1.DataLabelingService.ListEvaluationJobsCallback): void;

                    /**
                     * Calls ListEvaluationJobs.
                     * @param request ListEvaluationJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listEvaluationJobs(request: google.cloud.datalabeling.v1beta1.IListEvaluationJobsRequest): Promise<google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse>;
                }

                namespace DataLabelingService {

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#createDataset}.
                     * @param error Error, if any
                     * @param [response] Dataset
                     */
                    type CreateDatasetCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.Dataset) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getDataset}.
                     * @param error Error, if any
                     * @param [response] Dataset
                     */
                    type GetDatasetCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.Dataset) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listDatasets}.
                     * @param error Error, if any
                     * @param [response] ListDatasetsResponse
                     */
                    type ListDatasetsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListDatasetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#deleteDataset}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteDatasetCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#importData}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportDataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#exportData}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportDataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getDataItem}.
                     * @param error Error, if any
                     * @param [response] DataItem
                     */
                    type GetDataItemCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.DataItem) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listDataItems}.
                     * @param error Error, if any
                     * @param [response] ListDataItemsResponse
                     */
                    type ListDataItemsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListDataItemsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getAnnotatedDataset}.
                     * @param error Error, if any
                     * @param [response] AnnotatedDataset
                     */
                    type GetAnnotatedDatasetCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.AnnotatedDataset) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listAnnotatedDatasets}.
                     * @param error Error, if any
                     * @param [response] ListAnnotatedDatasetsResponse
                     */
                    type ListAnnotatedDatasetsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#deleteAnnotatedDataset}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAnnotatedDatasetCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#labelImage}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type LabelImageCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#labelVideo}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type LabelVideoCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#labelText}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type LabelTextCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getExample}.
                     * @param error Error, if any
                     * @param [response] Example
                     */
                    type GetExampleCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.Example) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listExamples}.
                     * @param error Error, if any
                     * @param [response] ListExamplesResponse
                     */
                    type ListExamplesCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListExamplesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#createAnnotationSpecSet}.
                     * @param error Error, if any
                     * @param [response] AnnotationSpecSet
                     */
                    type CreateAnnotationSpecSetCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.AnnotationSpecSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getAnnotationSpecSet}.
                     * @param error Error, if any
                     * @param [response] AnnotationSpecSet
                     */
                    type GetAnnotationSpecSetCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.AnnotationSpecSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listAnnotationSpecSets}.
                     * @param error Error, if any
                     * @param [response] ListAnnotationSpecSetsResponse
                     */
                    type ListAnnotationSpecSetsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#deleteAnnotationSpecSet}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAnnotationSpecSetCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#createInstruction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstructionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getInstruction}.
                     * @param error Error, if any
                     * @param [response] Instruction
                     */
                    type GetInstructionCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.Instruction) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listInstructions}.
                     * @param error Error, if any
                     * @param [response] ListInstructionsResponse
                     */
                    type ListInstructionsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListInstructionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#deleteInstruction}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteInstructionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getEvaluation}.
                     * @param error Error, if any
                     * @param [response] Evaluation
                     */
                    type GetEvaluationCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.Evaluation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#searchEvaluations}.
                     * @param error Error, if any
                     * @param [response] SearchEvaluationsResponse
                     */
                    type SearchEvaluationsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#searchExampleComparisons}.
                     * @param error Error, if any
                     * @param [response] SearchExampleComparisonsResponse
                     */
                    type SearchExampleComparisonsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#createEvaluationJob}.
                     * @param error Error, if any
                     * @param [response] EvaluationJob
                     */
                    type CreateEvaluationJobCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.EvaluationJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#updateEvaluationJob}.
                     * @param error Error, if any
                     * @param [response] EvaluationJob
                     */
                    type UpdateEvaluationJobCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.EvaluationJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#getEvaluationJob}.
                     * @param error Error, if any
                     * @param [response] EvaluationJob
                     */
                    type GetEvaluationJobCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.EvaluationJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#pauseEvaluationJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type PauseEvaluationJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#resumeEvaluationJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type ResumeEvaluationJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#deleteEvaluationJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteEvaluationJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datalabeling.v1beta1.DataLabelingService#listEvaluationJobs}.
                     * @param error Error, if any
                     * @param [response] ListEvaluationJobsResponse
                     */
                    type ListEvaluationJobsCallback = (error: (Error|null), response?: google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse) => void;
                }

                /** Properties of a CreateDatasetRequest. */
                interface ICreateDatasetRequest {

                    /** CreateDatasetRequest parent */
                    parent?: (string|null);

                    /** CreateDatasetRequest dataset */
                    dataset?: (google.cloud.datalabeling.v1beta1.IDataset|null);
                }

                /** Represents a CreateDatasetRequest. */
                class CreateDatasetRequest implements ICreateDatasetRequest {

                    /**
                     * Constructs a new CreateDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ICreateDatasetRequest);

                    /** CreateDatasetRequest parent. */
                    public parent: string;

                    /** CreateDatasetRequest dataset. */
                    public dataset?: (google.cloud.datalabeling.v1beta1.IDataset|null);

                    /**
                     * Creates a new CreateDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ICreateDatasetRequest): google.cloud.datalabeling.v1beta1.CreateDatasetRequest;

                    /**
                     * Encodes the specified CreateDatasetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateDatasetRequest.verify|verify} messages.
                     * @param message CreateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ICreateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateDatasetRequest.verify|verify} messages.
                     * @param message CreateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ICreateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.CreateDatasetRequest;

                    /**
                     * Decodes a CreateDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.CreateDatasetRequest;

                    /**
                     * Verifies a CreateDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.CreateDatasetRequest;

                    /**
                     * Creates a plain object from a CreateDatasetRequest message. Also converts values to other types if specified.
                     * @param message CreateDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.CreateDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetDatasetRequest. */
                interface IGetDatasetRequest {

                    /** GetDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDatasetRequest. */
                class GetDatasetRequest implements IGetDatasetRequest {

                    /**
                     * Constructs a new GetDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetDatasetRequest);

                    /** GetDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetDatasetRequest): google.cloud.datalabeling.v1beta1.GetDatasetRequest;

                    /**
                     * Encodes the specified GetDatasetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetDatasetRequest.verify|verify} messages.
                     * @param message GetDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetDatasetRequest.verify|verify} messages.
                     * @param message GetDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetDatasetRequest;

                    /**
                     * Decodes a GetDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetDatasetRequest;

                    /**
                     * Verifies a GetDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetDatasetRequest;

                    /**
                     * Creates a plain object from a GetDatasetRequest message. Also converts values to other types if specified.
                     * @param message GetDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDatasetsRequest. */
                interface IListDatasetsRequest {

                    /** ListDatasetsRequest parent */
                    parent?: (string|null);

                    /** ListDatasetsRequest filter */
                    filter?: (string|null);

                    /** ListDatasetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDatasetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDatasetsRequest. */
                class ListDatasetsRequest implements IListDatasetsRequest {

                    /**
                     * Constructs a new ListDatasetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListDatasetsRequest);

                    /** ListDatasetsRequest parent. */
                    public parent: string;

                    /** ListDatasetsRequest filter. */
                    public filter: string;

                    /** ListDatasetsRequest pageSize. */
                    public pageSize: number;

                    /** ListDatasetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDatasetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatasetsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListDatasetsRequest): google.cloud.datalabeling.v1beta1.ListDatasetsRequest;

                    /**
                     * Encodes the specified ListDatasetsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDatasetsRequest.verify|verify} messages.
                     * @param message ListDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatasetsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDatasetsRequest.verify|verify} messages.
                     * @param message ListDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatasetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListDatasetsRequest;

                    /**
                     * Decodes a ListDatasetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListDatasetsRequest;

                    /**
                     * Verifies a ListDatasetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatasetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatasetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListDatasetsRequest;

                    /**
                     * Creates a plain object from a ListDatasetsRequest message. Also converts values to other types if specified.
                     * @param message ListDatasetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListDatasetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatasetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDatasetsResponse. */
                interface IListDatasetsResponse {

                    /** ListDatasetsResponse datasets */
                    datasets?: (google.cloud.datalabeling.v1beta1.IDataset[]|null);

                    /** ListDatasetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDatasetsResponse. */
                class ListDatasetsResponse implements IListDatasetsResponse {

                    /**
                     * Constructs a new ListDatasetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListDatasetsResponse);

                    /** ListDatasetsResponse datasets. */
                    public datasets: google.cloud.datalabeling.v1beta1.IDataset[];

                    /** ListDatasetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDatasetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatasetsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListDatasetsResponse): google.cloud.datalabeling.v1beta1.ListDatasetsResponse;

                    /**
                     * Encodes the specified ListDatasetsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDatasetsResponse.verify|verify} messages.
                     * @param message ListDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatasetsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDatasetsResponse.verify|verify} messages.
                     * @param message ListDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatasetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListDatasetsResponse;

                    /**
                     * Decodes a ListDatasetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListDatasetsResponse;

                    /**
                     * Verifies a ListDatasetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatasetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatasetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListDatasetsResponse;

                    /**
                     * Creates a plain object from a ListDatasetsResponse message. Also converts values to other types if specified.
                     * @param message ListDatasetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListDatasetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatasetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteDatasetRequest. */
                interface IDeleteDatasetRequest {

                    /** DeleteDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteDatasetRequest. */
                class DeleteDatasetRequest implements IDeleteDatasetRequest {

                    /**
                     * Constructs a new DeleteDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDeleteDatasetRequest);

                    /** DeleteDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDeleteDatasetRequest): google.cloud.datalabeling.v1beta1.DeleteDatasetRequest;

                    /**
                     * Encodes the specified DeleteDatasetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.verify|verify} messages.
                     * @param message DeleteDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDeleteDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteDatasetRequest.verify|verify} messages.
                     * @param message DeleteDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDeleteDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.DeleteDatasetRequest;

                    /**
                     * Decodes a DeleteDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.DeleteDatasetRequest;

                    /**
                     * Verifies a DeleteDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.DeleteDatasetRequest;

                    /**
                     * Creates a plain object from a DeleteDatasetRequest message. Also converts values to other types if specified.
                     * @param message DeleteDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.DeleteDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImportDataRequest. */
                interface IImportDataRequest {

                    /** ImportDataRequest name */
                    name?: (string|null);

                    /** ImportDataRequest inputConfig */
                    inputConfig?: (google.cloud.datalabeling.v1beta1.IInputConfig|null);

                    /** ImportDataRequest userEmailAddress */
                    userEmailAddress?: (string|null);
                }

                /** Represents an ImportDataRequest. */
                class ImportDataRequest implements IImportDataRequest {

                    /**
                     * Constructs a new ImportDataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImportDataRequest);

                    /** ImportDataRequest name. */
                    public name: string;

                    /** ImportDataRequest inputConfig. */
                    public inputConfig?: (google.cloud.datalabeling.v1beta1.IInputConfig|null);

                    /** ImportDataRequest userEmailAddress. */
                    public userEmailAddress: string;

                    /**
                     * Creates a new ImportDataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportDataRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImportDataRequest): google.cloud.datalabeling.v1beta1.ImportDataRequest;

                    /**
                     * Encodes the specified ImportDataRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImportDataRequest.verify|verify} messages.
                     * @param message ImportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportDataRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImportDataRequest.verify|verify} messages.
                     * @param message ImportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportDataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImportDataRequest;

                    /**
                     * Decodes an ImportDataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImportDataRequest;

                    /**
                     * Verifies an ImportDataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportDataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportDataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImportDataRequest;

                    /**
                     * Creates a plain object from an ImportDataRequest message. Also converts values to other types if specified.
                     * @param message ImportDataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImportDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportDataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportDataRequest. */
                interface IExportDataRequest {

                    /** ExportDataRequest name */
                    name?: (string|null);

                    /** ExportDataRequest annotatedDataset */
                    annotatedDataset?: (string|null);

                    /** ExportDataRequest filter */
                    filter?: (string|null);

                    /** ExportDataRequest outputConfig */
                    outputConfig?: (google.cloud.datalabeling.v1beta1.IOutputConfig|null);

                    /** ExportDataRequest userEmailAddress */
                    userEmailAddress?: (string|null);
                }

                /** Represents an ExportDataRequest. */
                class ExportDataRequest implements IExportDataRequest {

                    /**
                     * Constructs a new ExportDataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IExportDataRequest);

                    /** ExportDataRequest name. */
                    public name: string;

                    /** ExportDataRequest annotatedDataset. */
                    public annotatedDataset: string;

                    /** ExportDataRequest filter. */
                    public filter: string;

                    /** ExportDataRequest outputConfig. */
                    public outputConfig?: (google.cloud.datalabeling.v1beta1.IOutputConfig|null);

                    /** ExportDataRequest userEmailAddress. */
                    public userEmailAddress: string;

                    /**
                     * Creates a new ExportDataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDataRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IExportDataRequest): google.cloud.datalabeling.v1beta1.ExportDataRequest;

                    /**
                     * Encodes the specified ExportDataRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ExportDataRequest.verify|verify} messages.
                     * @param message ExportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IExportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDataRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ExportDataRequest.verify|verify} messages.
                     * @param message ExportDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IExportDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ExportDataRequest;

                    /**
                     * Decodes an ExportDataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ExportDataRequest;

                    /**
                     * Verifies an ExportDataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ExportDataRequest;

                    /**
                     * Creates a plain object from an ExportDataRequest message. Also converts values to other types if specified.
                     * @param message ExportDataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ExportDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetDataItemRequest. */
                interface IGetDataItemRequest {

                    /** GetDataItemRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDataItemRequest. */
                class GetDataItemRequest implements IGetDataItemRequest {

                    /**
                     * Constructs a new GetDataItemRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetDataItemRequest);

                    /** GetDataItemRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDataItemRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDataItemRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetDataItemRequest): google.cloud.datalabeling.v1beta1.GetDataItemRequest;

                    /**
                     * Encodes the specified GetDataItemRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetDataItemRequest.verify|verify} messages.
                     * @param message GetDataItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetDataItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDataItemRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetDataItemRequest.verify|verify} messages.
                     * @param message GetDataItemRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetDataItemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDataItemRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDataItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetDataItemRequest;

                    /**
                     * Decodes a GetDataItemRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDataItemRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetDataItemRequest;

                    /**
                     * Verifies a GetDataItemRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDataItemRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDataItemRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetDataItemRequest;

                    /**
                     * Creates a plain object from a GetDataItemRequest message. Also converts values to other types if specified.
                     * @param message GetDataItemRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetDataItemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDataItemRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDataItemsRequest. */
                interface IListDataItemsRequest {

                    /** ListDataItemsRequest parent */
                    parent?: (string|null);

                    /** ListDataItemsRequest filter */
                    filter?: (string|null);

                    /** ListDataItemsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDataItemsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDataItemsRequest. */
                class ListDataItemsRequest implements IListDataItemsRequest {

                    /**
                     * Constructs a new ListDataItemsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListDataItemsRequest);

                    /** ListDataItemsRequest parent. */
                    public parent: string;

                    /** ListDataItemsRequest filter. */
                    public filter: string;

                    /** ListDataItemsRequest pageSize. */
                    public pageSize: number;

                    /** ListDataItemsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDataItemsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDataItemsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListDataItemsRequest): google.cloud.datalabeling.v1beta1.ListDataItemsRequest;

                    /**
                     * Encodes the specified ListDataItemsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDataItemsRequest.verify|verify} messages.
                     * @param message ListDataItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListDataItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDataItemsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDataItemsRequest.verify|verify} messages.
                     * @param message ListDataItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListDataItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDataItemsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDataItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListDataItemsRequest;

                    /**
                     * Decodes a ListDataItemsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDataItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListDataItemsRequest;

                    /**
                     * Verifies a ListDataItemsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDataItemsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDataItemsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListDataItemsRequest;

                    /**
                     * Creates a plain object from a ListDataItemsRequest message. Also converts values to other types if specified.
                     * @param message ListDataItemsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListDataItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDataItemsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDataItemsResponse. */
                interface IListDataItemsResponse {

                    /** ListDataItemsResponse dataItems */
                    dataItems?: (google.cloud.datalabeling.v1beta1.IDataItem[]|null);

                    /** ListDataItemsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDataItemsResponse. */
                class ListDataItemsResponse implements IListDataItemsResponse {

                    /**
                     * Constructs a new ListDataItemsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListDataItemsResponse);

                    /** ListDataItemsResponse dataItems. */
                    public dataItems: google.cloud.datalabeling.v1beta1.IDataItem[];

                    /** ListDataItemsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDataItemsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDataItemsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListDataItemsResponse): google.cloud.datalabeling.v1beta1.ListDataItemsResponse;

                    /**
                     * Encodes the specified ListDataItemsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDataItemsResponse.verify|verify} messages.
                     * @param message ListDataItemsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListDataItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDataItemsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListDataItemsResponse.verify|verify} messages.
                     * @param message ListDataItemsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListDataItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDataItemsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDataItemsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListDataItemsResponse;

                    /**
                     * Decodes a ListDataItemsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDataItemsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListDataItemsResponse;

                    /**
                     * Verifies a ListDataItemsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDataItemsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDataItemsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListDataItemsResponse;

                    /**
                     * Creates a plain object from a ListDataItemsResponse message. Also converts values to other types if specified.
                     * @param message ListDataItemsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListDataItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDataItemsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAnnotatedDatasetRequest. */
                interface IGetAnnotatedDatasetRequest {

                    /** GetAnnotatedDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAnnotatedDatasetRequest. */
                class GetAnnotatedDatasetRequest implements IGetAnnotatedDatasetRequest {

                    /**
                     * Constructs a new GetAnnotatedDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetAnnotatedDatasetRequest);

                    /** GetAnnotatedDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAnnotatedDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAnnotatedDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetAnnotatedDatasetRequest): google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest;

                    /**
                     * Encodes the specified GetAnnotatedDatasetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.verify|verify} messages.
                     * @param message GetAnnotatedDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetAnnotatedDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAnnotatedDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest.verify|verify} messages.
                     * @param message GetAnnotatedDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetAnnotatedDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAnnotatedDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAnnotatedDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest;

                    /**
                     * Decodes a GetAnnotatedDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAnnotatedDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest;

                    /**
                     * Verifies a GetAnnotatedDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAnnotatedDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAnnotatedDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest;

                    /**
                     * Creates a plain object from a GetAnnotatedDatasetRequest message. Also converts values to other types if specified.
                     * @param message GetAnnotatedDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAnnotatedDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnnotatedDatasetsRequest. */
                interface IListAnnotatedDatasetsRequest {

                    /** ListAnnotatedDatasetsRequest parent */
                    parent?: (string|null);

                    /** ListAnnotatedDatasetsRequest filter */
                    filter?: (string|null);

                    /** ListAnnotatedDatasetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAnnotatedDatasetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAnnotatedDatasetsRequest. */
                class ListAnnotatedDatasetsRequest implements IListAnnotatedDatasetsRequest {

                    /**
                     * Constructs a new ListAnnotatedDatasetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsRequest);

                    /** ListAnnotatedDatasetsRequest parent. */
                    public parent: string;

                    /** ListAnnotatedDatasetsRequest filter. */
                    public filter: string;

                    /** ListAnnotatedDatasetsRequest pageSize. */
                    public pageSize: number;

                    /** ListAnnotatedDatasetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAnnotatedDatasetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnnotatedDatasetsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsRequest): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest;

                    /**
                     * Encodes the specified ListAnnotatedDatasetsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.verify|verify} messages.
                     * @param message ListAnnotatedDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnnotatedDatasetsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest.verify|verify} messages.
                     * @param message ListAnnotatedDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnnotatedDatasetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnnotatedDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest;

                    /**
                     * Decodes a ListAnnotatedDatasetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnnotatedDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest;

                    /**
                     * Verifies a ListAnnotatedDatasetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnnotatedDatasetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnnotatedDatasetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest;

                    /**
                     * Creates a plain object from a ListAnnotatedDatasetsRequest message. Also converts values to other types if specified.
                     * @param message ListAnnotatedDatasetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnnotatedDatasetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnnotatedDatasetsResponse. */
                interface IListAnnotatedDatasetsResponse {

                    /** ListAnnotatedDatasetsResponse annotatedDatasets */
                    annotatedDatasets?: (google.cloud.datalabeling.v1beta1.IAnnotatedDataset[]|null);

                    /** ListAnnotatedDatasetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAnnotatedDatasetsResponse. */
                class ListAnnotatedDatasetsResponse implements IListAnnotatedDatasetsResponse {

                    /**
                     * Constructs a new ListAnnotatedDatasetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsResponse);

                    /** ListAnnotatedDatasetsResponse annotatedDatasets. */
                    public annotatedDatasets: google.cloud.datalabeling.v1beta1.IAnnotatedDataset[];

                    /** ListAnnotatedDatasetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAnnotatedDatasetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnnotatedDatasetsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsResponse): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse;

                    /**
                     * Encodes the specified ListAnnotatedDatasetsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.verify|verify} messages.
                     * @param message ListAnnotatedDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnnotatedDatasetsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse.verify|verify} messages.
                     * @param message ListAnnotatedDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListAnnotatedDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnnotatedDatasetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnnotatedDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse;

                    /**
                     * Decodes a ListAnnotatedDatasetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnnotatedDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse;

                    /**
                     * Verifies a ListAnnotatedDatasetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnnotatedDatasetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnnotatedDatasetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse;

                    /**
                     * Creates a plain object from a ListAnnotatedDatasetsResponse message. Also converts values to other types if specified.
                     * @param message ListAnnotatedDatasetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnnotatedDatasetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAnnotatedDatasetRequest. */
                interface IDeleteAnnotatedDatasetRequest {

                    /** DeleteAnnotatedDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAnnotatedDatasetRequest. */
                class DeleteAnnotatedDatasetRequest implements IDeleteAnnotatedDatasetRequest {

                    /**
                     * Constructs a new DeleteAnnotatedDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDeleteAnnotatedDatasetRequest);

                    /** DeleteAnnotatedDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAnnotatedDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAnnotatedDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDeleteAnnotatedDatasetRequest): google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest;

                    /**
                     * Encodes the specified DeleteAnnotatedDatasetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.verify|verify} messages.
                     * @param message DeleteAnnotatedDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDeleteAnnotatedDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAnnotatedDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest.verify|verify} messages.
                     * @param message DeleteAnnotatedDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDeleteAnnotatedDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAnnotatedDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAnnotatedDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest;

                    /**
                     * Decodes a DeleteAnnotatedDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAnnotatedDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest;

                    /**
                     * Verifies a DeleteAnnotatedDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAnnotatedDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAnnotatedDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest;

                    /**
                     * Creates a plain object from a DeleteAnnotatedDatasetRequest message. Also converts values to other types if specified.
                     * @param message DeleteAnnotatedDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAnnotatedDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LabelImageRequest. */
                interface ILabelImageRequest {

                    /** LabelImageRequest imageClassificationConfig */
                    imageClassificationConfig?: (google.cloud.datalabeling.v1beta1.IImageClassificationConfig|null);

                    /** LabelImageRequest boundingPolyConfig */
                    boundingPolyConfig?: (google.cloud.datalabeling.v1beta1.IBoundingPolyConfig|null);

                    /** LabelImageRequest polylineConfig */
                    polylineConfig?: (google.cloud.datalabeling.v1beta1.IPolylineConfig|null);

                    /** LabelImageRequest segmentationConfig */
                    segmentationConfig?: (google.cloud.datalabeling.v1beta1.ISegmentationConfig|null);

                    /** LabelImageRequest parent */
                    parent?: (string|null);

                    /** LabelImageRequest basicConfig */
                    basicConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** LabelImageRequest feature */
                    feature?: (google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature|null);
                }

                /** Represents a LabelImageRequest. */
                class LabelImageRequest implements ILabelImageRequest {

                    /**
                     * Constructs a new LabelImageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ILabelImageRequest);

                    /** LabelImageRequest imageClassificationConfig. */
                    public imageClassificationConfig?: (google.cloud.datalabeling.v1beta1.IImageClassificationConfig|null);

                    /** LabelImageRequest boundingPolyConfig. */
                    public boundingPolyConfig?: (google.cloud.datalabeling.v1beta1.IBoundingPolyConfig|null);

                    /** LabelImageRequest polylineConfig. */
                    public polylineConfig?: (google.cloud.datalabeling.v1beta1.IPolylineConfig|null);

                    /** LabelImageRequest segmentationConfig. */
                    public segmentationConfig?: (google.cloud.datalabeling.v1beta1.ISegmentationConfig|null);

                    /** LabelImageRequest parent. */
                    public parent: string;

                    /** LabelImageRequest basicConfig. */
                    public basicConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** LabelImageRequest feature. */
                    public feature: google.cloud.datalabeling.v1beta1.LabelImageRequest.Feature;

                    /** LabelImageRequest requestConfig. */
                    public requestConfig?: ("imageClassificationConfig"|"boundingPolyConfig"|"polylineConfig"|"segmentationConfig");

                    /**
                     * Creates a new LabelImageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelImageRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ILabelImageRequest): google.cloud.datalabeling.v1beta1.LabelImageRequest;

                    /**
                     * Encodes the specified LabelImageRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelImageRequest.verify|verify} messages.
                     * @param message LabelImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ILabelImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelImageRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelImageRequest.verify|verify} messages.
                     * @param message LabelImageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ILabelImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelImageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.LabelImageRequest;

                    /**
                     * Decodes a LabelImageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelImageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.LabelImageRequest;

                    /**
                     * Verifies a LabelImageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelImageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelImageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.LabelImageRequest;

                    /**
                     * Creates a plain object from a LabelImageRequest message. Also converts values to other types if specified.
                     * @param message LabelImageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.LabelImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelImageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LabelImageRequest {

                    /** Feature enum. */
                    enum Feature {
                        FEATURE_UNSPECIFIED = 0,
                        CLASSIFICATION = 1,
                        BOUNDING_BOX = 2,
                        ORIENTED_BOUNDING_BOX = 6,
                        BOUNDING_POLY = 3,
                        POLYLINE = 4,
                        SEGMENTATION = 5
                    }
                }

                /** Properties of a LabelVideoRequest. */
                interface ILabelVideoRequest {

                    /** LabelVideoRequest videoClassificationConfig */
                    videoClassificationConfig?: (google.cloud.datalabeling.v1beta1.IVideoClassificationConfig|null);

                    /** LabelVideoRequest objectDetectionConfig */
                    objectDetectionConfig?: (google.cloud.datalabeling.v1beta1.IObjectDetectionConfig|null);

                    /** LabelVideoRequest objectTrackingConfig */
                    objectTrackingConfig?: (google.cloud.datalabeling.v1beta1.IObjectTrackingConfig|null);

                    /** LabelVideoRequest eventConfig */
                    eventConfig?: (google.cloud.datalabeling.v1beta1.IEventConfig|null);

                    /** LabelVideoRequest parent */
                    parent?: (string|null);

                    /** LabelVideoRequest basicConfig */
                    basicConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** LabelVideoRequest feature */
                    feature?: (google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature|null);
                }

                /** Represents a LabelVideoRequest. */
                class LabelVideoRequest implements ILabelVideoRequest {

                    /**
                     * Constructs a new LabelVideoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ILabelVideoRequest);

                    /** LabelVideoRequest videoClassificationConfig. */
                    public videoClassificationConfig?: (google.cloud.datalabeling.v1beta1.IVideoClassificationConfig|null);

                    /** LabelVideoRequest objectDetectionConfig. */
                    public objectDetectionConfig?: (google.cloud.datalabeling.v1beta1.IObjectDetectionConfig|null);

                    /** LabelVideoRequest objectTrackingConfig. */
                    public objectTrackingConfig?: (google.cloud.datalabeling.v1beta1.IObjectTrackingConfig|null);

                    /** LabelVideoRequest eventConfig. */
                    public eventConfig?: (google.cloud.datalabeling.v1beta1.IEventConfig|null);

                    /** LabelVideoRequest parent. */
                    public parent: string;

                    /** LabelVideoRequest basicConfig. */
                    public basicConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** LabelVideoRequest feature. */
                    public feature: google.cloud.datalabeling.v1beta1.LabelVideoRequest.Feature;

                    /** LabelVideoRequest requestConfig. */
                    public requestConfig?: ("videoClassificationConfig"|"objectDetectionConfig"|"objectTrackingConfig"|"eventConfig");

                    /**
                     * Creates a new LabelVideoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelVideoRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ILabelVideoRequest): google.cloud.datalabeling.v1beta1.LabelVideoRequest;

                    /**
                     * Encodes the specified LabelVideoRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelVideoRequest.verify|verify} messages.
                     * @param message LabelVideoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ILabelVideoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelVideoRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelVideoRequest.verify|verify} messages.
                     * @param message LabelVideoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ILabelVideoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelVideoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelVideoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.LabelVideoRequest;

                    /**
                     * Decodes a LabelVideoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelVideoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.LabelVideoRequest;

                    /**
                     * Verifies a LabelVideoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelVideoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelVideoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.LabelVideoRequest;

                    /**
                     * Creates a plain object from a LabelVideoRequest message. Also converts values to other types if specified.
                     * @param message LabelVideoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.LabelVideoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelVideoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LabelVideoRequest {

                    /** Feature enum. */
                    enum Feature {
                        FEATURE_UNSPECIFIED = 0,
                        CLASSIFICATION = 1,
                        OBJECT_DETECTION = 2,
                        OBJECT_TRACKING = 3,
                        EVENT = 4
                    }
                }

                /** Properties of a LabelTextRequest. */
                interface ILabelTextRequest {

                    /** LabelTextRequest textClassificationConfig */
                    textClassificationConfig?: (google.cloud.datalabeling.v1beta1.ITextClassificationConfig|null);

                    /** LabelTextRequest textEntityExtractionConfig */
                    textEntityExtractionConfig?: (google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig|null);

                    /** LabelTextRequest parent */
                    parent?: (string|null);

                    /** LabelTextRequest basicConfig */
                    basicConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** LabelTextRequest feature */
                    feature?: (google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature|null);
                }

                /** Represents a LabelTextRequest. */
                class LabelTextRequest implements ILabelTextRequest {

                    /**
                     * Constructs a new LabelTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ILabelTextRequest);

                    /** LabelTextRequest textClassificationConfig. */
                    public textClassificationConfig?: (google.cloud.datalabeling.v1beta1.ITextClassificationConfig|null);

                    /** LabelTextRequest textEntityExtractionConfig. */
                    public textEntityExtractionConfig?: (google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig|null);

                    /** LabelTextRequest parent. */
                    public parent: string;

                    /** LabelTextRequest basicConfig. */
                    public basicConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** LabelTextRequest feature. */
                    public feature: google.cloud.datalabeling.v1beta1.LabelTextRequest.Feature;

                    /** LabelTextRequest requestConfig. */
                    public requestConfig?: ("textClassificationConfig"|"textEntityExtractionConfig");

                    /**
                     * Creates a new LabelTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelTextRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ILabelTextRequest): google.cloud.datalabeling.v1beta1.LabelTextRequest;

                    /**
                     * Encodes the specified LabelTextRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelTextRequest.verify|verify} messages.
                     * @param message LabelTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ILabelTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelTextRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelTextRequest.verify|verify} messages.
                     * @param message LabelTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ILabelTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.LabelTextRequest;

                    /**
                     * Decodes a LabelTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.LabelTextRequest;

                    /**
                     * Verifies a LabelTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.LabelTextRequest;

                    /**
                     * Creates a plain object from a LabelTextRequest message. Also converts values to other types if specified.
                     * @param message LabelTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.LabelTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LabelTextRequest {

                    /** Feature enum. */
                    enum Feature {
                        FEATURE_UNSPECIFIED = 0,
                        TEXT_CLASSIFICATION = 1,
                        TEXT_ENTITY_EXTRACTION = 2
                    }
                }

                /** Properties of a GetExampleRequest. */
                interface IGetExampleRequest {

                    /** GetExampleRequest name */
                    name?: (string|null);

                    /** GetExampleRequest filter */
                    filter?: (string|null);
                }

                /** Represents a GetExampleRequest. */
                class GetExampleRequest implements IGetExampleRequest {

                    /**
                     * Constructs a new GetExampleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetExampleRequest);

                    /** GetExampleRequest name. */
                    public name: string;

                    /** GetExampleRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new GetExampleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetExampleRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetExampleRequest): google.cloud.datalabeling.v1beta1.GetExampleRequest;

                    /**
                     * Encodes the specified GetExampleRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetExampleRequest.verify|verify} messages.
                     * @param message GetExampleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetExampleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetExampleRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetExampleRequest.verify|verify} messages.
                     * @param message GetExampleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetExampleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetExampleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetExampleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetExampleRequest;

                    /**
                     * Decodes a GetExampleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetExampleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetExampleRequest;

                    /**
                     * Verifies a GetExampleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetExampleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetExampleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetExampleRequest;

                    /**
                     * Creates a plain object from a GetExampleRequest message. Also converts values to other types if specified.
                     * @param message GetExampleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetExampleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetExampleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListExamplesRequest. */
                interface IListExamplesRequest {

                    /** ListExamplesRequest parent */
                    parent?: (string|null);

                    /** ListExamplesRequest filter */
                    filter?: (string|null);

                    /** ListExamplesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListExamplesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListExamplesRequest. */
                class ListExamplesRequest implements IListExamplesRequest {

                    /**
                     * Constructs a new ListExamplesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListExamplesRequest);

                    /** ListExamplesRequest parent. */
                    public parent: string;

                    /** ListExamplesRequest filter. */
                    public filter: string;

                    /** ListExamplesRequest pageSize. */
                    public pageSize: number;

                    /** ListExamplesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListExamplesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListExamplesRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListExamplesRequest): google.cloud.datalabeling.v1beta1.ListExamplesRequest;

                    /**
                     * Encodes the specified ListExamplesRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListExamplesRequest.verify|verify} messages.
                     * @param message ListExamplesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListExamplesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListExamplesRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListExamplesRequest.verify|verify} messages.
                     * @param message ListExamplesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListExamplesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListExamplesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListExamplesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListExamplesRequest;

                    /**
                     * Decodes a ListExamplesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListExamplesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListExamplesRequest;

                    /**
                     * Verifies a ListExamplesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListExamplesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListExamplesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListExamplesRequest;

                    /**
                     * Creates a plain object from a ListExamplesRequest message. Also converts values to other types if specified.
                     * @param message ListExamplesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListExamplesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListExamplesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListExamplesResponse. */
                interface IListExamplesResponse {

                    /** ListExamplesResponse examples */
                    examples?: (google.cloud.datalabeling.v1beta1.IExample[]|null);

                    /** ListExamplesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListExamplesResponse. */
                class ListExamplesResponse implements IListExamplesResponse {

                    /**
                     * Constructs a new ListExamplesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListExamplesResponse);

                    /** ListExamplesResponse examples. */
                    public examples: google.cloud.datalabeling.v1beta1.IExample[];

                    /** ListExamplesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListExamplesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListExamplesResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListExamplesResponse): google.cloud.datalabeling.v1beta1.ListExamplesResponse;

                    /**
                     * Encodes the specified ListExamplesResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListExamplesResponse.verify|verify} messages.
                     * @param message ListExamplesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListExamplesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListExamplesResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListExamplesResponse.verify|verify} messages.
                     * @param message ListExamplesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListExamplesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListExamplesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListExamplesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListExamplesResponse;

                    /**
                     * Decodes a ListExamplesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListExamplesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListExamplesResponse;

                    /**
                     * Verifies a ListExamplesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListExamplesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListExamplesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListExamplesResponse;

                    /**
                     * Creates a plain object from a ListExamplesResponse message. Also converts values to other types if specified.
                     * @param message ListExamplesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListExamplesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListExamplesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAnnotationSpecSetRequest. */
                interface ICreateAnnotationSpecSetRequest {

                    /** CreateAnnotationSpecSetRequest parent */
                    parent?: (string|null);

                    /** CreateAnnotationSpecSetRequest annotationSpecSet */
                    annotationSpecSet?: (google.cloud.datalabeling.v1beta1.IAnnotationSpecSet|null);
                }

                /** Represents a CreateAnnotationSpecSetRequest. */
                class CreateAnnotationSpecSetRequest implements ICreateAnnotationSpecSetRequest {

                    /**
                     * Constructs a new CreateAnnotationSpecSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ICreateAnnotationSpecSetRequest);

                    /** CreateAnnotationSpecSetRequest parent. */
                    public parent: string;

                    /** CreateAnnotationSpecSetRequest annotationSpecSet. */
                    public annotationSpecSet?: (google.cloud.datalabeling.v1beta1.IAnnotationSpecSet|null);

                    /**
                     * Creates a new CreateAnnotationSpecSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAnnotationSpecSetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ICreateAnnotationSpecSetRequest): google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest;

                    /**
                     * Encodes the specified CreateAnnotationSpecSetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.verify|verify} messages.
                     * @param message CreateAnnotationSpecSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ICreateAnnotationSpecSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAnnotationSpecSetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest.verify|verify} messages.
                     * @param message CreateAnnotationSpecSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ICreateAnnotationSpecSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAnnotationSpecSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAnnotationSpecSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest;

                    /**
                     * Decodes a CreateAnnotationSpecSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAnnotationSpecSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest;

                    /**
                     * Verifies a CreateAnnotationSpecSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAnnotationSpecSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAnnotationSpecSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest;

                    /**
                     * Creates a plain object from a CreateAnnotationSpecSetRequest message. Also converts values to other types if specified.
                     * @param message CreateAnnotationSpecSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAnnotationSpecSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAnnotationSpecSetRequest. */
                interface IGetAnnotationSpecSetRequest {

                    /** GetAnnotationSpecSetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAnnotationSpecSetRequest. */
                class GetAnnotationSpecSetRequest implements IGetAnnotationSpecSetRequest {

                    /**
                     * Constructs a new GetAnnotationSpecSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetAnnotationSpecSetRequest);

                    /** GetAnnotationSpecSetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAnnotationSpecSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAnnotationSpecSetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetAnnotationSpecSetRequest): google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest;

                    /**
                     * Encodes the specified GetAnnotationSpecSetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.verify|verify} messages.
                     * @param message GetAnnotationSpecSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetAnnotationSpecSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAnnotationSpecSetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest.verify|verify} messages.
                     * @param message GetAnnotationSpecSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetAnnotationSpecSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAnnotationSpecSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAnnotationSpecSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest;

                    /**
                     * Decodes a GetAnnotationSpecSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAnnotationSpecSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest;

                    /**
                     * Verifies a GetAnnotationSpecSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAnnotationSpecSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAnnotationSpecSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest;

                    /**
                     * Creates a plain object from a GetAnnotationSpecSetRequest message. Also converts values to other types if specified.
                     * @param message GetAnnotationSpecSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAnnotationSpecSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnnotationSpecSetsRequest. */
                interface IListAnnotationSpecSetsRequest {

                    /** ListAnnotationSpecSetsRequest parent */
                    parent?: (string|null);

                    /** ListAnnotationSpecSetsRequest filter */
                    filter?: (string|null);

                    /** ListAnnotationSpecSetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAnnotationSpecSetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAnnotationSpecSetsRequest. */
                class ListAnnotationSpecSetsRequest implements IListAnnotationSpecSetsRequest {

                    /**
                     * Constructs a new ListAnnotationSpecSetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsRequest);

                    /** ListAnnotationSpecSetsRequest parent. */
                    public parent: string;

                    /** ListAnnotationSpecSetsRequest filter. */
                    public filter: string;

                    /** ListAnnotationSpecSetsRequest pageSize. */
                    public pageSize: number;

                    /** ListAnnotationSpecSetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAnnotationSpecSetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnnotationSpecSetsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsRequest): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest;

                    /**
                     * Encodes the specified ListAnnotationSpecSetsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.verify|verify} messages.
                     * @param message ListAnnotationSpecSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnnotationSpecSetsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest.verify|verify} messages.
                     * @param message ListAnnotationSpecSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnnotationSpecSetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnnotationSpecSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest;

                    /**
                     * Decodes a ListAnnotationSpecSetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnnotationSpecSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest;

                    /**
                     * Verifies a ListAnnotationSpecSetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnnotationSpecSetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnnotationSpecSetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest;

                    /**
                     * Creates a plain object from a ListAnnotationSpecSetsRequest message. Also converts values to other types if specified.
                     * @param message ListAnnotationSpecSetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnnotationSpecSetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnnotationSpecSetsResponse. */
                interface IListAnnotationSpecSetsResponse {

                    /** ListAnnotationSpecSetsResponse annotationSpecSets */
                    annotationSpecSets?: (google.cloud.datalabeling.v1beta1.IAnnotationSpecSet[]|null);

                    /** ListAnnotationSpecSetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAnnotationSpecSetsResponse. */
                class ListAnnotationSpecSetsResponse implements IListAnnotationSpecSetsResponse {

                    /**
                     * Constructs a new ListAnnotationSpecSetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsResponse);

                    /** ListAnnotationSpecSetsResponse annotationSpecSets. */
                    public annotationSpecSets: google.cloud.datalabeling.v1beta1.IAnnotationSpecSet[];

                    /** ListAnnotationSpecSetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAnnotationSpecSetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnnotationSpecSetsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsResponse): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse;

                    /**
                     * Encodes the specified ListAnnotationSpecSetsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.verify|verify} messages.
                     * @param message ListAnnotationSpecSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnnotationSpecSetsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse.verify|verify} messages.
                     * @param message ListAnnotationSpecSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListAnnotationSpecSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnnotationSpecSetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnnotationSpecSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse;

                    /**
                     * Decodes a ListAnnotationSpecSetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnnotationSpecSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse;

                    /**
                     * Verifies a ListAnnotationSpecSetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnnotationSpecSetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnnotationSpecSetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse;

                    /**
                     * Creates a plain object from a ListAnnotationSpecSetsResponse message. Also converts values to other types if specified.
                     * @param message ListAnnotationSpecSetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnnotationSpecSetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAnnotationSpecSetRequest. */
                interface IDeleteAnnotationSpecSetRequest {

                    /** DeleteAnnotationSpecSetRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAnnotationSpecSetRequest. */
                class DeleteAnnotationSpecSetRequest implements IDeleteAnnotationSpecSetRequest {

                    /**
                     * Constructs a new DeleteAnnotationSpecSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDeleteAnnotationSpecSetRequest);

                    /** DeleteAnnotationSpecSetRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAnnotationSpecSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAnnotationSpecSetRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDeleteAnnotationSpecSetRequest): google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest;

                    /**
                     * Encodes the specified DeleteAnnotationSpecSetRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.verify|verify} messages.
                     * @param message DeleteAnnotationSpecSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDeleteAnnotationSpecSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAnnotationSpecSetRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest.verify|verify} messages.
                     * @param message DeleteAnnotationSpecSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDeleteAnnotationSpecSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAnnotationSpecSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAnnotationSpecSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest;

                    /**
                     * Decodes a DeleteAnnotationSpecSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAnnotationSpecSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest;

                    /**
                     * Verifies a DeleteAnnotationSpecSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAnnotationSpecSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAnnotationSpecSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest;

                    /**
                     * Creates a plain object from a DeleteAnnotationSpecSetRequest message. Also converts values to other types if specified.
                     * @param message DeleteAnnotationSpecSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAnnotationSpecSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateInstructionRequest. */
                interface ICreateInstructionRequest {

                    /** CreateInstructionRequest parent */
                    parent?: (string|null);

                    /** CreateInstructionRequest instruction */
                    instruction?: (google.cloud.datalabeling.v1beta1.IInstruction|null);
                }

                /** Represents a CreateInstructionRequest. */
                class CreateInstructionRequest implements ICreateInstructionRequest {

                    /**
                     * Constructs a new CreateInstructionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ICreateInstructionRequest);

                    /** CreateInstructionRequest parent. */
                    public parent: string;

                    /** CreateInstructionRequest instruction. */
                    public instruction?: (google.cloud.datalabeling.v1beta1.IInstruction|null);

                    /**
                     * Creates a new CreateInstructionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstructionRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ICreateInstructionRequest): google.cloud.datalabeling.v1beta1.CreateInstructionRequest;

                    /**
                     * Encodes the specified CreateInstructionRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateInstructionRequest.verify|verify} messages.
                     * @param message CreateInstructionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ICreateInstructionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstructionRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateInstructionRequest.verify|verify} messages.
                     * @param message CreateInstructionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ICreateInstructionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstructionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstructionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.CreateInstructionRequest;

                    /**
                     * Decodes a CreateInstructionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstructionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.CreateInstructionRequest;

                    /**
                     * Verifies a CreateInstructionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateInstructionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateInstructionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.CreateInstructionRequest;

                    /**
                     * Creates a plain object from a CreateInstructionRequest message. Also converts values to other types if specified.
                     * @param message CreateInstructionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.CreateInstructionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInstructionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstructionRequest. */
                interface IGetInstructionRequest {

                    /** GetInstructionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstructionRequest. */
                class GetInstructionRequest implements IGetInstructionRequest {

                    /**
                     * Constructs a new GetInstructionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetInstructionRequest);

                    /** GetInstructionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstructionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstructionRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetInstructionRequest): google.cloud.datalabeling.v1beta1.GetInstructionRequest;

                    /**
                     * Encodes the specified GetInstructionRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetInstructionRequest.verify|verify} messages.
                     * @param message GetInstructionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetInstructionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstructionRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetInstructionRequest.verify|verify} messages.
                     * @param message GetInstructionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetInstructionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstructionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstructionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetInstructionRequest;

                    /**
                     * Decodes a GetInstructionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstructionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetInstructionRequest;

                    /**
                     * Verifies a GetInstructionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstructionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstructionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetInstructionRequest;

                    /**
                     * Creates a plain object from a GetInstructionRequest message. Also converts values to other types if specified.
                     * @param message GetInstructionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetInstructionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstructionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteInstructionRequest. */
                interface IDeleteInstructionRequest {

                    /** DeleteInstructionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteInstructionRequest. */
                class DeleteInstructionRequest implements IDeleteInstructionRequest {

                    /**
                     * Constructs a new DeleteInstructionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDeleteInstructionRequest);

                    /** DeleteInstructionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstructionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstructionRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDeleteInstructionRequest): google.cloud.datalabeling.v1beta1.DeleteInstructionRequest;

                    /**
                     * Encodes the specified DeleteInstructionRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.verify|verify} messages.
                     * @param message DeleteInstructionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDeleteInstructionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstructionRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteInstructionRequest.verify|verify} messages.
                     * @param message DeleteInstructionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDeleteInstructionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstructionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstructionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.DeleteInstructionRequest;

                    /**
                     * Decodes a DeleteInstructionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstructionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.DeleteInstructionRequest;

                    /**
                     * Verifies a DeleteInstructionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteInstructionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteInstructionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.DeleteInstructionRequest;

                    /**
                     * Creates a plain object from a DeleteInstructionRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstructionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.DeleteInstructionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInstructionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstructionsRequest. */
                interface IListInstructionsRequest {

                    /** ListInstructionsRequest parent */
                    parent?: (string|null);

                    /** ListInstructionsRequest filter */
                    filter?: (string|null);

                    /** ListInstructionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstructionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListInstructionsRequest. */
                class ListInstructionsRequest implements IListInstructionsRequest {

                    /**
                     * Constructs a new ListInstructionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListInstructionsRequest);

                    /** ListInstructionsRequest parent. */
                    public parent: string;

                    /** ListInstructionsRequest filter. */
                    public filter: string;

                    /** ListInstructionsRequest pageSize. */
                    public pageSize: number;

                    /** ListInstructionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListInstructionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstructionsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListInstructionsRequest): google.cloud.datalabeling.v1beta1.ListInstructionsRequest;

                    /**
                     * Encodes the specified ListInstructionsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListInstructionsRequest.verify|verify} messages.
                     * @param message ListInstructionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListInstructionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstructionsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListInstructionsRequest.verify|verify} messages.
                     * @param message ListInstructionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListInstructionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstructionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstructionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListInstructionsRequest;

                    /**
                     * Decodes a ListInstructionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstructionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListInstructionsRequest;

                    /**
                     * Verifies a ListInstructionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstructionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstructionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListInstructionsRequest;

                    /**
                     * Creates a plain object from a ListInstructionsRequest message. Also converts values to other types if specified.
                     * @param message ListInstructionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListInstructionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstructionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstructionsResponse. */
                interface IListInstructionsResponse {

                    /** ListInstructionsResponse instructions */
                    instructions?: (google.cloud.datalabeling.v1beta1.IInstruction[]|null);

                    /** ListInstructionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListInstructionsResponse. */
                class ListInstructionsResponse implements IListInstructionsResponse {

                    /**
                     * Constructs a new ListInstructionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListInstructionsResponse);

                    /** ListInstructionsResponse instructions. */
                    public instructions: google.cloud.datalabeling.v1beta1.IInstruction[];

                    /** ListInstructionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListInstructionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstructionsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListInstructionsResponse): google.cloud.datalabeling.v1beta1.ListInstructionsResponse;

                    /**
                     * Encodes the specified ListInstructionsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListInstructionsResponse.verify|verify} messages.
                     * @param message ListInstructionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListInstructionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstructionsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListInstructionsResponse.verify|verify} messages.
                     * @param message ListInstructionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListInstructionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstructionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstructionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListInstructionsResponse;

                    /**
                     * Decodes a ListInstructionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstructionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListInstructionsResponse;

                    /**
                     * Verifies a ListInstructionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstructionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstructionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListInstructionsResponse;

                    /**
                     * Creates a plain object from a ListInstructionsResponse message. Also converts values to other types if specified.
                     * @param message ListInstructionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListInstructionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstructionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEvaluationRequest. */
                interface IGetEvaluationRequest {

                    /** GetEvaluationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEvaluationRequest. */
                class GetEvaluationRequest implements IGetEvaluationRequest {

                    /**
                     * Constructs a new GetEvaluationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetEvaluationRequest);

                    /** GetEvaluationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEvaluationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEvaluationRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetEvaluationRequest): google.cloud.datalabeling.v1beta1.GetEvaluationRequest;

                    /**
                     * Encodes the specified GetEvaluationRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetEvaluationRequest.verify|verify} messages.
                     * @param message GetEvaluationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetEvaluationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEvaluationRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetEvaluationRequest.verify|verify} messages.
                     * @param message GetEvaluationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetEvaluationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEvaluationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEvaluationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetEvaluationRequest;

                    /**
                     * Decodes a GetEvaluationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEvaluationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetEvaluationRequest;

                    /**
                     * Verifies a GetEvaluationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEvaluationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEvaluationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetEvaluationRequest;

                    /**
                     * Creates a plain object from a GetEvaluationRequest message. Also converts values to other types if specified.
                     * @param message GetEvaluationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetEvaluationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEvaluationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchEvaluationsRequest. */
                interface ISearchEvaluationsRequest {

                    /** SearchEvaluationsRequest parent */
                    parent?: (string|null);

                    /** SearchEvaluationsRequest filter */
                    filter?: (string|null);

                    /** SearchEvaluationsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchEvaluationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchEvaluationsRequest. */
                class SearchEvaluationsRequest implements ISearchEvaluationsRequest {

                    /**
                     * Constructs a new SearchEvaluationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISearchEvaluationsRequest);

                    /** SearchEvaluationsRequest parent. */
                    public parent: string;

                    /** SearchEvaluationsRequest filter. */
                    public filter: string;

                    /** SearchEvaluationsRequest pageSize. */
                    public pageSize: number;

                    /** SearchEvaluationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchEvaluationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchEvaluationsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISearchEvaluationsRequest): google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest;

                    /**
                     * Encodes the specified SearchEvaluationsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.verify|verify} messages.
                     * @param message SearchEvaluationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISearchEvaluationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchEvaluationsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest.verify|verify} messages.
                     * @param message SearchEvaluationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISearchEvaluationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchEvaluationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchEvaluationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest;

                    /**
                     * Decodes a SearchEvaluationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchEvaluationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest;

                    /**
                     * Verifies a SearchEvaluationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchEvaluationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchEvaluationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest;

                    /**
                     * Creates a plain object from a SearchEvaluationsRequest message. Also converts values to other types if specified.
                     * @param message SearchEvaluationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchEvaluationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchEvaluationsResponse. */
                interface ISearchEvaluationsResponse {

                    /** SearchEvaluationsResponse evaluations */
                    evaluations?: (google.cloud.datalabeling.v1beta1.IEvaluation[]|null);

                    /** SearchEvaluationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchEvaluationsResponse. */
                class SearchEvaluationsResponse implements ISearchEvaluationsResponse {

                    /**
                     * Constructs a new SearchEvaluationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISearchEvaluationsResponse);

                    /** SearchEvaluationsResponse evaluations. */
                    public evaluations: google.cloud.datalabeling.v1beta1.IEvaluation[];

                    /** SearchEvaluationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchEvaluationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchEvaluationsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISearchEvaluationsResponse): google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse;

                    /**
                     * Encodes the specified SearchEvaluationsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.verify|verify} messages.
                     * @param message SearchEvaluationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISearchEvaluationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchEvaluationsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse.verify|verify} messages.
                     * @param message SearchEvaluationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISearchEvaluationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchEvaluationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchEvaluationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse;

                    /**
                     * Decodes a SearchEvaluationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchEvaluationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse;

                    /**
                     * Verifies a SearchEvaluationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchEvaluationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchEvaluationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse;

                    /**
                     * Creates a plain object from a SearchEvaluationsResponse message. Also converts values to other types if specified.
                     * @param message SearchEvaluationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchEvaluationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchExampleComparisonsRequest. */
                interface ISearchExampleComparisonsRequest {

                    /** SearchExampleComparisonsRequest parent */
                    parent?: (string|null);

                    /** SearchExampleComparisonsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchExampleComparisonsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchExampleComparisonsRequest. */
                class SearchExampleComparisonsRequest implements ISearchExampleComparisonsRequest {

                    /**
                     * Constructs a new SearchExampleComparisonsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsRequest);

                    /** SearchExampleComparisonsRequest parent. */
                    public parent: string;

                    /** SearchExampleComparisonsRequest pageSize. */
                    public pageSize: number;

                    /** SearchExampleComparisonsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchExampleComparisonsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchExampleComparisonsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsRequest): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest;

                    /**
                     * Encodes the specified SearchExampleComparisonsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.verify|verify} messages.
                     * @param message SearchExampleComparisonsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchExampleComparisonsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest.verify|verify} messages.
                     * @param message SearchExampleComparisonsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchExampleComparisonsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchExampleComparisonsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest;

                    /**
                     * Decodes a SearchExampleComparisonsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchExampleComparisonsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest;

                    /**
                     * Verifies a SearchExampleComparisonsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchExampleComparisonsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchExampleComparisonsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest;

                    /**
                     * Creates a plain object from a SearchExampleComparisonsRequest message. Also converts values to other types if specified.
                     * @param message SearchExampleComparisonsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchExampleComparisonsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchExampleComparisonsResponse. */
                interface ISearchExampleComparisonsResponse {

                    /** SearchExampleComparisonsResponse exampleComparisons */
                    exampleComparisons?: (google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.IExampleComparison[]|null);

                    /** SearchExampleComparisonsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchExampleComparisonsResponse. */
                class SearchExampleComparisonsResponse implements ISearchExampleComparisonsResponse {

                    /**
                     * Constructs a new SearchExampleComparisonsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsResponse);

                    /** SearchExampleComparisonsResponse exampleComparisons. */
                    public exampleComparisons: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.IExampleComparison[];

                    /** SearchExampleComparisonsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchExampleComparisonsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchExampleComparisonsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsResponse): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse;

                    /**
                     * Encodes the specified SearchExampleComparisonsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.verify|verify} messages.
                     * @param message SearchExampleComparisonsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchExampleComparisonsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.verify|verify} messages.
                     * @param message SearchExampleComparisonsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISearchExampleComparisonsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchExampleComparisonsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchExampleComparisonsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse;

                    /**
                     * Decodes a SearchExampleComparisonsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchExampleComparisonsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse;

                    /**
                     * Verifies a SearchExampleComparisonsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchExampleComparisonsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchExampleComparisonsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse;

                    /**
                     * Creates a plain object from a SearchExampleComparisonsResponse message. Also converts values to other types if specified.
                     * @param message SearchExampleComparisonsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchExampleComparisonsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchExampleComparisonsResponse {

                    /** Properties of an ExampleComparison. */
                    interface IExampleComparison {

                        /** ExampleComparison groundTruthExample */
                        groundTruthExample?: (google.cloud.datalabeling.v1beta1.IExample|null);

                        /** ExampleComparison modelCreatedExamples */
                        modelCreatedExamples?: (google.cloud.datalabeling.v1beta1.IExample[]|null);
                    }

                    /** Represents an ExampleComparison. */
                    class ExampleComparison implements IExampleComparison {

                        /**
                         * Constructs a new ExampleComparison.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.IExampleComparison);

                        /** ExampleComparison groundTruthExample. */
                        public groundTruthExample?: (google.cloud.datalabeling.v1beta1.IExample|null);

                        /** ExampleComparison modelCreatedExamples. */
                        public modelCreatedExamples: google.cloud.datalabeling.v1beta1.IExample[];

                        /**
                         * Creates a new ExampleComparison instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExampleComparison instance
                         */
                        public static create(properties?: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.IExampleComparison): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison;

                        /**
                         * Encodes the specified ExampleComparison message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.verify|verify} messages.
                         * @param message ExampleComparison message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.IExampleComparison, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExampleComparison message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison.verify|verify} messages.
                         * @param message ExampleComparison message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.IExampleComparison, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExampleComparison message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExampleComparison
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison;

                        /**
                         * Decodes an ExampleComparison message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExampleComparison
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison;

                        /**
                         * Verifies an ExampleComparison message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExampleComparison message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExampleComparison
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison;

                        /**
                         * Creates a plain object from an ExampleComparison message. Also converts values to other types if specified.
                         * @param message ExampleComparison
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExampleComparison to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CreateEvaluationJobRequest. */
                interface ICreateEvaluationJobRequest {

                    /** CreateEvaluationJobRequest parent */
                    parent?: (string|null);

                    /** CreateEvaluationJobRequest job */
                    job?: (google.cloud.datalabeling.v1beta1.IEvaluationJob|null);
                }

                /** Represents a CreateEvaluationJobRequest. */
                class CreateEvaluationJobRequest implements ICreateEvaluationJobRequest {

                    /**
                     * Constructs a new CreateEvaluationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ICreateEvaluationJobRequest);

                    /** CreateEvaluationJobRequest parent. */
                    public parent: string;

                    /** CreateEvaluationJobRequest job. */
                    public job?: (google.cloud.datalabeling.v1beta1.IEvaluationJob|null);

                    /**
                     * Creates a new CreateEvaluationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEvaluationJobRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ICreateEvaluationJobRequest): google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest;

                    /**
                     * Encodes the specified CreateEvaluationJobRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.verify|verify} messages.
                     * @param message CreateEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ICreateEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEvaluationJobRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest.verify|verify} messages.
                     * @param message CreateEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ICreateEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEvaluationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest;

                    /**
                     * Decodes a CreateEvaluationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest;

                    /**
                     * Verifies a CreateEvaluationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEvaluationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEvaluationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest;

                    /**
                     * Creates a plain object from a CreateEvaluationJobRequest message. Also converts values to other types if specified.
                     * @param message CreateEvaluationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEvaluationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateEvaluationJobRequest. */
                interface IUpdateEvaluationJobRequest {

                    /** UpdateEvaluationJobRequest evaluationJob */
                    evaluationJob?: (google.cloud.datalabeling.v1beta1.IEvaluationJob|null);

                    /** UpdateEvaluationJobRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateEvaluationJobRequest. */
                class UpdateEvaluationJobRequest implements IUpdateEvaluationJobRequest {

                    /**
                     * Constructs a new UpdateEvaluationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IUpdateEvaluationJobRequest);

                    /** UpdateEvaluationJobRequest evaluationJob. */
                    public evaluationJob?: (google.cloud.datalabeling.v1beta1.IEvaluationJob|null);

                    /** UpdateEvaluationJobRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateEvaluationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEvaluationJobRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IUpdateEvaluationJobRequest): google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest;

                    /**
                     * Encodes the specified UpdateEvaluationJobRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.verify|verify} messages.
                     * @param message UpdateEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IUpdateEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEvaluationJobRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest.verify|verify} messages.
                     * @param message UpdateEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IUpdateEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEvaluationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest;

                    /**
                     * Decodes an UpdateEvaluationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest;

                    /**
                     * Verifies an UpdateEvaluationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEvaluationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEvaluationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest;

                    /**
                     * Creates a plain object from an UpdateEvaluationJobRequest message. Also converts values to other types if specified.
                     * @param message UpdateEvaluationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEvaluationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEvaluationJobRequest. */
                interface IGetEvaluationJobRequest {

                    /** GetEvaluationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEvaluationJobRequest. */
                class GetEvaluationJobRequest implements IGetEvaluationJobRequest {

                    /**
                     * Constructs a new GetEvaluationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGetEvaluationJobRequest);

                    /** GetEvaluationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEvaluationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEvaluationJobRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGetEvaluationJobRequest): google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest;

                    /**
                     * Encodes the specified GetEvaluationJobRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.verify|verify} messages.
                     * @param message GetEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGetEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEvaluationJobRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest.verify|verify} messages.
                     * @param message GetEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGetEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEvaluationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest;

                    /**
                     * Decodes a GetEvaluationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest;

                    /**
                     * Verifies a GetEvaluationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEvaluationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEvaluationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest;

                    /**
                     * Creates a plain object from a GetEvaluationJobRequest message. Also converts values to other types if specified.
                     * @param message GetEvaluationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEvaluationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseEvaluationJobRequest. */
                interface IPauseEvaluationJobRequest {

                    /** PauseEvaluationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseEvaluationJobRequest. */
                class PauseEvaluationJobRequest implements IPauseEvaluationJobRequest {

                    /**
                     * Constructs a new PauseEvaluationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IPauseEvaluationJobRequest);

                    /** PauseEvaluationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseEvaluationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseEvaluationJobRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IPauseEvaluationJobRequest): google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest;

                    /**
                     * Encodes the specified PauseEvaluationJobRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.verify|verify} messages.
                     * @param message PauseEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IPauseEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseEvaluationJobRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest.verify|verify} messages.
                     * @param message PauseEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IPauseEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseEvaluationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest;

                    /**
                     * Decodes a PauseEvaluationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest;

                    /**
                     * Verifies a PauseEvaluationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseEvaluationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseEvaluationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest;

                    /**
                     * Creates a plain object from a PauseEvaluationJobRequest message. Also converts values to other types if specified.
                     * @param message PauseEvaluationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseEvaluationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeEvaluationJobRequest. */
                interface IResumeEvaluationJobRequest {

                    /** ResumeEvaluationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeEvaluationJobRequest. */
                class ResumeEvaluationJobRequest implements IResumeEvaluationJobRequest {

                    /**
                     * Constructs a new ResumeEvaluationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IResumeEvaluationJobRequest);

                    /** ResumeEvaluationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeEvaluationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeEvaluationJobRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IResumeEvaluationJobRequest): google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest;

                    /**
                     * Encodes the specified ResumeEvaluationJobRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.verify|verify} messages.
                     * @param message ResumeEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IResumeEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeEvaluationJobRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest.verify|verify} messages.
                     * @param message ResumeEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IResumeEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeEvaluationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest;

                    /**
                     * Decodes a ResumeEvaluationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest;

                    /**
                     * Verifies a ResumeEvaluationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeEvaluationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeEvaluationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest;

                    /**
                     * Creates a plain object from a ResumeEvaluationJobRequest message. Also converts values to other types if specified.
                     * @param message ResumeEvaluationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeEvaluationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteEvaluationJobRequest. */
                interface IDeleteEvaluationJobRequest {

                    /** DeleteEvaluationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteEvaluationJobRequest. */
                class DeleteEvaluationJobRequest implements IDeleteEvaluationJobRequest {

                    /**
                     * Constructs a new DeleteEvaluationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDeleteEvaluationJobRequest);

                    /** DeleteEvaluationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteEvaluationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEvaluationJobRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDeleteEvaluationJobRequest): google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest;

                    /**
                     * Encodes the specified DeleteEvaluationJobRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.verify|verify} messages.
                     * @param message DeleteEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDeleteEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEvaluationJobRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest.verify|verify} messages.
                     * @param message DeleteEvaluationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDeleteEvaluationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEvaluationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest;

                    /**
                     * Decodes a DeleteEvaluationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEvaluationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest;

                    /**
                     * Verifies a DeleteEvaluationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEvaluationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEvaluationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest;

                    /**
                     * Creates a plain object from a DeleteEvaluationJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteEvaluationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEvaluationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEvaluationJobsRequest. */
                interface IListEvaluationJobsRequest {

                    /** ListEvaluationJobsRequest parent */
                    parent?: (string|null);

                    /** ListEvaluationJobsRequest filter */
                    filter?: (string|null);

                    /** ListEvaluationJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEvaluationJobsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEvaluationJobsRequest. */
                class ListEvaluationJobsRequest implements IListEvaluationJobsRequest {

                    /**
                     * Constructs a new ListEvaluationJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListEvaluationJobsRequest);

                    /** ListEvaluationJobsRequest parent. */
                    public parent: string;

                    /** ListEvaluationJobsRequest filter. */
                    public filter: string;

                    /** ListEvaluationJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListEvaluationJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEvaluationJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEvaluationJobsRequest instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListEvaluationJobsRequest): google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest;

                    /**
                     * Encodes the specified ListEvaluationJobsRequest message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.verify|verify} messages.
                     * @param message ListEvaluationJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListEvaluationJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEvaluationJobsRequest message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest.verify|verify} messages.
                     * @param message ListEvaluationJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListEvaluationJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEvaluationJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEvaluationJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest;

                    /**
                     * Decodes a ListEvaluationJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEvaluationJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest;

                    /**
                     * Verifies a ListEvaluationJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEvaluationJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEvaluationJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest;

                    /**
                     * Creates a plain object from a ListEvaluationJobsRequest message. Also converts values to other types if specified.
                     * @param message ListEvaluationJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEvaluationJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEvaluationJobsResponse. */
                interface IListEvaluationJobsResponse {

                    /** ListEvaluationJobsResponse evaluationJobs */
                    evaluationJobs?: (google.cloud.datalabeling.v1beta1.IEvaluationJob[]|null);

                    /** ListEvaluationJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEvaluationJobsResponse. */
                class ListEvaluationJobsResponse implements IListEvaluationJobsResponse {

                    /**
                     * Constructs a new ListEvaluationJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IListEvaluationJobsResponse);

                    /** ListEvaluationJobsResponse evaluationJobs. */
                    public evaluationJobs: google.cloud.datalabeling.v1beta1.IEvaluationJob[];

                    /** ListEvaluationJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEvaluationJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEvaluationJobsResponse instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IListEvaluationJobsResponse): google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse;

                    /**
                     * Encodes the specified ListEvaluationJobsResponse message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.verify|verify} messages.
                     * @param message ListEvaluationJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IListEvaluationJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEvaluationJobsResponse message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse.verify|verify} messages.
                     * @param message ListEvaluationJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IListEvaluationJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEvaluationJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEvaluationJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse;

                    /**
                     * Decodes a ListEvaluationJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEvaluationJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse;

                    /**
                     * Verifies a ListEvaluationJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEvaluationJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEvaluationJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse;

                    /**
                     * Creates a plain object from a ListEvaluationJobsResponse message. Also converts values to other types if specified.
                     * @param message ListEvaluationJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEvaluationJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotationSpecSet. */
                interface IAnnotationSpecSet {

                    /** AnnotationSpecSet name */
                    name?: (string|null);

                    /** AnnotationSpecSet displayName */
                    displayName?: (string|null);

                    /** AnnotationSpecSet description */
                    description?: (string|null);

                    /** AnnotationSpecSet annotationSpecs */
                    annotationSpecs?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec[]|null);

                    /** AnnotationSpecSet blockingResources */
                    blockingResources?: (string[]|null);
                }

                /** Represents an AnnotationSpecSet. */
                class AnnotationSpecSet implements IAnnotationSpecSet {

                    /**
                     * Constructs a new AnnotationSpecSet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotationSpecSet);

                    /** AnnotationSpecSet name. */
                    public name: string;

                    /** AnnotationSpecSet displayName. */
                    public displayName: string;

                    /** AnnotationSpecSet description. */
                    public description: string;

                    /** AnnotationSpecSet annotationSpecs. */
                    public annotationSpecs: google.cloud.datalabeling.v1beta1.IAnnotationSpec[];

                    /** AnnotationSpecSet blockingResources. */
                    public blockingResources: string[];

                    /**
                     * Creates a new AnnotationSpecSet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationSpecSet instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotationSpecSet): google.cloud.datalabeling.v1beta1.AnnotationSpecSet;

                    /**
                     * Encodes the specified AnnotationSpecSet message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet.verify|verify} messages.
                     * @param message AnnotationSpecSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotationSpecSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationSpecSet message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet.verify|verify} messages.
                     * @param message AnnotationSpecSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotationSpecSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationSpecSet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationSpecSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.AnnotationSpecSet;

                    /**
                     * Decodes an AnnotationSpecSet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationSpecSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.AnnotationSpecSet;

                    /**
                     * Verifies an AnnotationSpecSet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationSpecSet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationSpecSet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.AnnotationSpecSet;

                    /**
                     * Creates a plain object from an AnnotationSpecSet message. Also converts values to other types if specified.
                     * @param message AnnotationSpecSet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.AnnotationSpecSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationSpecSet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotationSpec. */
                interface IAnnotationSpec {

                    /** AnnotationSpec displayName */
                    displayName?: (string|null);

                    /** AnnotationSpec description */
                    description?: (string|null);
                }

                /** Represents an AnnotationSpec. */
                class AnnotationSpec implements IAnnotationSpec {

                    /**
                     * Constructs a new AnnotationSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotationSpec);

                    /** AnnotationSpec displayName. */
                    public displayName: string;

                    /** AnnotationSpec description. */
                    public description: string;

                    /**
                     * Creates a new AnnotationSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationSpec instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotationSpec): google.cloud.datalabeling.v1beta1.AnnotationSpec;

                    /**
                     * Encodes the specified AnnotationSpec message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationSpec.verify|verify} messages.
                     * @param message AnnotationSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotationSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationSpec message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationSpec.verify|verify} messages.
                     * @param message AnnotationSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotationSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.AnnotationSpec;

                    /**
                     * Decodes an AnnotationSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.AnnotationSpec;

                    /**
                     * Verifies an AnnotationSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.AnnotationSpec;

                    /**
                     * Creates a plain object from an AnnotationSpec message. Also converts values to other types if specified.
                     * @param message AnnotationSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.AnnotationSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** DataType enum. */
                enum DataType {
                    DATA_TYPE_UNSPECIFIED = 0,
                    IMAGE = 1,
                    VIDEO = 2,
                    TEXT = 4,
                    GENERAL_DATA = 6
                }

                /** Properties of a Dataset. */
                interface IDataset {

                    /** Dataset name */
                    name?: (string|null);

                    /** Dataset displayName */
                    displayName?: (string|null);

                    /** Dataset description */
                    description?: (string|null);

                    /** Dataset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset inputConfigs */
                    inputConfigs?: (google.cloud.datalabeling.v1beta1.IInputConfig[]|null);

                    /** Dataset blockingResources */
                    blockingResources?: (string[]|null);

                    /** Dataset dataItemCount */
                    dataItemCount?: (number|Long|null);
                }

                /** Represents a Dataset. */
                class Dataset implements IDataset {

                    /**
                     * Constructs a new Dataset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDataset);

                    /** Dataset name. */
                    public name: string;

                    /** Dataset displayName. */
                    public displayName: string;

                    /** Dataset description. */
                    public description: string;

                    /** Dataset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset inputConfigs. */
                    public inputConfigs: google.cloud.datalabeling.v1beta1.IInputConfig[];

                    /** Dataset blockingResources. */
                    public blockingResources: string[];

                    /** Dataset dataItemCount. */
                    public dataItemCount: (number|Long);

                    /**
                     * Creates a new Dataset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dataset instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDataset): google.cloud.datalabeling.v1beta1.Dataset;

                    /**
                     * Encodes the specified Dataset message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dataset message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Dataset;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Dataset;

                    /**
                     * Verifies a Dataset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dataset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dataset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Dataset;

                    /**
                     * Creates a plain object from a Dataset message. Also converts values to other types if specified.
                     * @param message Dataset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Dataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dataset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig textMetadata */
                    textMetadata?: (google.cloud.datalabeling.v1beta1.ITextMetadata|null);

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.datalabeling.v1beta1.IGcsSource|null);

                    /** InputConfig bigquerySource */
                    bigquerySource?: (google.cloud.datalabeling.v1beta1.IBigQuerySource|null);

                    /** InputConfig dataType */
                    dataType?: (google.cloud.datalabeling.v1beta1.DataType|null);

                    /** InputConfig annotationType */
                    annotationType?: (google.cloud.datalabeling.v1beta1.AnnotationType|null);

                    /** InputConfig classificationMetadata */
                    classificationMetadata?: (google.cloud.datalabeling.v1beta1.IClassificationMetadata|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IInputConfig);

                    /** InputConfig textMetadata. */
                    public textMetadata?: (google.cloud.datalabeling.v1beta1.ITextMetadata|null);

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.datalabeling.v1beta1.IGcsSource|null);

                    /** InputConfig bigquerySource. */
                    public bigquerySource?: (google.cloud.datalabeling.v1beta1.IBigQuerySource|null);

                    /** InputConfig dataType. */
                    public dataType: google.cloud.datalabeling.v1beta1.DataType;

                    /** InputConfig annotationType. */
                    public annotationType: google.cloud.datalabeling.v1beta1.AnnotationType;

                    /** InputConfig classificationMetadata. */
                    public classificationMetadata?: (google.cloud.datalabeling.v1beta1.IClassificationMetadata|null);

                    /** InputConfig dataTypeMetadata. */
                    public dataTypeMetadata?: "textMetadata";

                    /** InputConfig source. */
                    public source?: ("gcsSource"|"bigquerySource");

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IInputConfig): google.cloud.datalabeling.v1beta1.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TextMetadata. */
                interface ITextMetadata {

                    /** TextMetadata languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a TextMetadata. */
                class TextMetadata implements ITextMetadata {

                    /**
                     * Constructs a new TextMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITextMetadata);

                    /** TextMetadata languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new TextMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextMetadata instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITextMetadata): google.cloud.datalabeling.v1beta1.TextMetadata;

                    /**
                     * Encodes the specified TextMetadata message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextMetadata.verify|verify} messages.
                     * @param message TextMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITextMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextMetadata message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextMetadata.verify|verify} messages.
                     * @param message TextMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITextMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TextMetadata;

                    /**
                     * Decodes a TextMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TextMetadata;

                    /**
                     * Verifies a TextMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TextMetadata;

                    /**
                     * Creates a plain object from a TextMetadata message. Also converts values to other types if specified.
                     * @param message TextMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TextMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassificationMetadata. */
                interface IClassificationMetadata {

                    /** ClassificationMetadata isMultiLabel */
                    isMultiLabel?: (boolean|null);
                }

                /** Represents a ClassificationMetadata. */
                class ClassificationMetadata implements IClassificationMetadata {

                    /**
                     * Constructs a new ClassificationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IClassificationMetadata);

                    /** ClassificationMetadata isMultiLabel. */
                    public isMultiLabel: boolean;

                    /**
                     * Creates a new ClassificationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassificationMetadata instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IClassificationMetadata): google.cloud.datalabeling.v1beta1.ClassificationMetadata;

                    /**
                     * Encodes the specified ClassificationMetadata message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ClassificationMetadata.verify|verify} messages.
                     * @param message ClassificationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IClassificationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassificationMetadata message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ClassificationMetadata.verify|verify} messages.
                     * @param message ClassificationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IClassificationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassificationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassificationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ClassificationMetadata;

                    /**
                     * Decodes a ClassificationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassificationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ClassificationMetadata;

                    /**
                     * Verifies a ClassificationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassificationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassificationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ClassificationMetadata;

                    /**
                     * Creates a plain object from a ClassificationMetadata message. Also converts values to other types if specified.
                     * @param message ClassificationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ClassificationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassificationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource inputUri */
                    inputUri?: (string|null);

                    /** GcsSource mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGcsSource);

                    /** GcsSource inputUri. */
                    public inputUri: string;

                    /** GcsSource mimeType. */
                    public mimeType: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGcsSource): google.cloud.datalabeling.v1beta1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BigQuerySource. */
                interface IBigQuerySource {

                    /** BigQuerySource inputUri */
                    inputUri?: (string|null);
                }

                /** Represents a BigQuerySource. */
                class BigQuerySource implements IBigQuerySource {

                    /**
                     * Constructs a new BigQuerySource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IBigQuerySource);

                    /** BigQuerySource inputUri. */
                    public inputUri: string;

                    /**
                     * Creates a new BigQuerySource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQuerySource instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IBigQuerySource): google.cloud.datalabeling.v1beta1.BigQuerySource;

                    /**
                     * Encodes the specified BigQuerySource message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BigQuerySource.verify|verify} messages.
                     * @param message BigQuerySource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IBigQuerySource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQuerySource message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BigQuerySource.verify|verify} messages.
                     * @param message BigQuerySource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IBigQuerySource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQuerySource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQuerySource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.BigQuerySource;

                    /**
                     * Decodes a BigQuerySource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQuerySource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.BigQuerySource;

                    /**
                     * Verifies a BigQuerySource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQuerySource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQuerySource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.BigQuerySource;

                    /**
                     * Creates a plain object from a BigQuerySource message. Also converts values to other types if specified.
                     * @param message BigQuerySource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.BigQuerySource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQuerySource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.datalabeling.v1beta1.IGcsDestination|null);

                    /** OutputConfig gcsFolderDestination */
                    gcsFolderDestination?: (google.cloud.datalabeling.v1beta1.IGcsFolderDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.datalabeling.v1beta1.IGcsDestination|null);

                    /** OutputConfig gcsFolderDestination. */
                    public gcsFolderDestination?: (google.cloud.datalabeling.v1beta1.IGcsFolderDestination|null);

                    /** OutputConfig destination. */
                    public destination?: ("gcsDestination"|"gcsFolderDestination");

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IOutputConfig): google.cloud.datalabeling.v1beta1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination outputUri */
                    outputUri?: (string|null);

                    /** GcsDestination mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGcsDestination);

                    /** GcsDestination outputUri. */
                    public outputUri: string;

                    /** GcsDestination mimeType. */
                    public mimeType: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGcsDestination): google.cloud.datalabeling.v1beta1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsFolderDestination. */
                interface IGcsFolderDestination {

                    /** GcsFolderDestination outputFolderUri */
                    outputFolderUri?: (string|null);
                }

                /** Represents a GcsFolderDestination. */
                class GcsFolderDestination implements IGcsFolderDestination {

                    /**
                     * Constructs a new GcsFolderDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IGcsFolderDestination);

                    /** GcsFolderDestination outputFolderUri. */
                    public outputFolderUri: string;

                    /**
                     * Creates a new GcsFolderDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsFolderDestination instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IGcsFolderDestination): google.cloud.datalabeling.v1beta1.GcsFolderDestination;

                    /**
                     * Encodes the specified GcsFolderDestination message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GcsFolderDestination.verify|verify} messages.
                     * @param message GcsFolderDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IGcsFolderDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsFolderDestination message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.GcsFolderDestination.verify|verify} messages.
                     * @param message GcsFolderDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IGcsFolderDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsFolderDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsFolderDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.GcsFolderDestination;

                    /**
                     * Decodes a GcsFolderDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsFolderDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.GcsFolderDestination;

                    /**
                     * Verifies a GcsFolderDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsFolderDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsFolderDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.GcsFolderDestination;

                    /**
                     * Creates a plain object from a GcsFolderDestination message. Also converts values to other types if specified.
                     * @param message GcsFolderDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.GcsFolderDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsFolderDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DataItem. */
                interface IDataItem {

                    /** DataItem imagePayload */
                    imagePayload?: (google.cloud.datalabeling.v1beta1.IImagePayload|null);

                    /** DataItem textPayload */
                    textPayload?: (google.cloud.datalabeling.v1beta1.ITextPayload|null);

                    /** DataItem videoPayload */
                    videoPayload?: (google.cloud.datalabeling.v1beta1.IVideoPayload|null);

                    /** DataItem name */
                    name?: (string|null);
                }

                /** Represents a DataItem. */
                class DataItem implements IDataItem {

                    /**
                     * Constructs a new DataItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IDataItem);

                    /** DataItem imagePayload. */
                    public imagePayload?: (google.cloud.datalabeling.v1beta1.IImagePayload|null);

                    /** DataItem textPayload. */
                    public textPayload?: (google.cloud.datalabeling.v1beta1.ITextPayload|null);

                    /** DataItem videoPayload. */
                    public videoPayload?: (google.cloud.datalabeling.v1beta1.IVideoPayload|null);

                    /** DataItem name. */
                    public name: string;

                    /** DataItem payload. */
                    public payload?: ("imagePayload"|"textPayload"|"videoPayload");

                    /**
                     * Creates a new DataItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataItem instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IDataItem): google.cloud.datalabeling.v1beta1.DataItem;

                    /**
                     * Encodes the specified DataItem message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DataItem.verify|verify} messages.
                     * @param message DataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataItem message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.DataItem.verify|verify} messages.
                     * @param message DataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.DataItem;

                    /**
                     * Decodes a DataItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.DataItem;

                    /**
                     * Verifies a DataItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.DataItem;

                    /**
                     * Creates a plain object from a DataItem message. Also converts values to other types if specified.
                     * @param message DataItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.DataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotatedDataset. */
                interface IAnnotatedDataset {

                    /** AnnotatedDataset name */
                    name?: (string|null);

                    /** AnnotatedDataset displayName */
                    displayName?: (string|null);

                    /** AnnotatedDataset description */
                    description?: (string|null);

                    /** AnnotatedDataset annotationSource */
                    annotationSource?: (google.cloud.datalabeling.v1beta1.AnnotationSource|null);

                    /** AnnotatedDataset annotationType */
                    annotationType?: (google.cloud.datalabeling.v1beta1.AnnotationType|null);

                    /** AnnotatedDataset exampleCount */
                    exampleCount?: (number|Long|null);

                    /** AnnotatedDataset completedExampleCount */
                    completedExampleCount?: (number|Long|null);

                    /** AnnotatedDataset labelStats */
                    labelStats?: (google.cloud.datalabeling.v1beta1.ILabelStats|null);

                    /** AnnotatedDataset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AnnotatedDataset metadata */
                    metadata?: (google.cloud.datalabeling.v1beta1.IAnnotatedDatasetMetadata|null);

                    /** AnnotatedDataset blockingResources */
                    blockingResources?: (string[]|null);
                }

                /** Represents an AnnotatedDataset. */
                class AnnotatedDataset implements IAnnotatedDataset {

                    /**
                     * Constructs a new AnnotatedDataset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotatedDataset);

                    /** AnnotatedDataset name. */
                    public name: string;

                    /** AnnotatedDataset displayName. */
                    public displayName: string;

                    /** AnnotatedDataset description. */
                    public description: string;

                    /** AnnotatedDataset annotationSource. */
                    public annotationSource: google.cloud.datalabeling.v1beta1.AnnotationSource;

                    /** AnnotatedDataset annotationType. */
                    public annotationType: google.cloud.datalabeling.v1beta1.AnnotationType;

                    /** AnnotatedDataset exampleCount. */
                    public exampleCount: (number|Long);

                    /** AnnotatedDataset completedExampleCount. */
                    public completedExampleCount: (number|Long);

                    /** AnnotatedDataset labelStats. */
                    public labelStats?: (google.cloud.datalabeling.v1beta1.ILabelStats|null);

                    /** AnnotatedDataset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AnnotatedDataset metadata. */
                    public metadata?: (google.cloud.datalabeling.v1beta1.IAnnotatedDatasetMetadata|null);

                    /** AnnotatedDataset blockingResources. */
                    public blockingResources: string[];

                    /**
                     * Creates a new AnnotatedDataset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotatedDataset instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotatedDataset): google.cloud.datalabeling.v1beta1.AnnotatedDataset;

                    /**
                     * Encodes the specified AnnotatedDataset message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotatedDataset.verify|verify} messages.
                     * @param message AnnotatedDataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotatedDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotatedDataset message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotatedDataset.verify|verify} messages.
                     * @param message AnnotatedDataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotatedDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotatedDataset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotatedDataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.AnnotatedDataset;

                    /**
                     * Decodes an AnnotatedDataset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotatedDataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.AnnotatedDataset;

                    /**
                     * Verifies an AnnotatedDataset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotatedDataset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotatedDataset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.AnnotatedDataset;

                    /**
                     * Creates a plain object from an AnnotatedDataset message. Also converts values to other types if specified.
                     * @param message AnnotatedDataset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.AnnotatedDataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotatedDataset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LabelStats. */
                interface ILabelStats {

                    /** LabelStats exampleCount */
                    exampleCount?: ({ [k: string]: (number|Long) }|null);
                }

                /** Represents a LabelStats. */
                class LabelStats implements ILabelStats {

                    /**
                     * Constructs a new LabelStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ILabelStats);

                    /** LabelStats exampleCount. */
                    public exampleCount: { [k: string]: (number|Long) };

                    /**
                     * Creates a new LabelStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LabelStats instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ILabelStats): google.cloud.datalabeling.v1beta1.LabelStats;

                    /**
                     * Encodes the specified LabelStats message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelStats.verify|verify} messages.
                     * @param message LabelStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ILabelStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LabelStats message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.LabelStats.verify|verify} messages.
                     * @param message LabelStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ILabelStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LabelStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LabelStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.LabelStats;

                    /**
                     * Decodes a LabelStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LabelStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.LabelStats;

                    /**
                     * Verifies a LabelStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LabelStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LabelStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.LabelStats;

                    /**
                     * Creates a plain object from a LabelStats message. Also converts values to other types if specified.
                     * @param message LabelStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.LabelStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LabelStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotatedDatasetMetadata. */
                interface IAnnotatedDatasetMetadata {

                    /** AnnotatedDatasetMetadata imageClassificationConfig */
                    imageClassificationConfig?: (google.cloud.datalabeling.v1beta1.IImageClassificationConfig|null);

                    /** AnnotatedDatasetMetadata boundingPolyConfig */
                    boundingPolyConfig?: (google.cloud.datalabeling.v1beta1.IBoundingPolyConfig|null);

                    /** AnnotatedDatasetMetadata polylineConfig */
                    polylineConfig?: (google.cloud.datalabeling.v1beta1.IPolylineConfig|null);

                    /** AnnotatedDatasetMetadata segmentationConfig */
                    segmentationConfig?: (google.cloud.datalabeling.v1beta1.ISegmentationConfig|null);

                    /** AnnotatedDatasetMetadata videoClassificationConfig */
                    videoClassificationConfig?: (google.cloud.datalabeling.v1beta1.IVideoClassificationConfig|null);

                    /** AnnotatedDatasetMetadata objectDetectionConfig */
                    objectDetectionConfig?: (google.cloud.datalabeling.v1beta1.IObjectDetectionConfig|null);

                    /** AnnotatedDatasetMetadata objectTrackingConfig */
                    objectTrackingConfig?: (google.cloud.datalabeling.v1beta1.IObjectTrackingConfig|null);

                    /** AnnotatedDatasetMetadata eventConfig */
                    eventConfig?: (google.cloud.datalabeling.v1beta1.IEventConfig|null);

                    /** AnnotatedDatasetMetadata textClassificationConfig */
                    textClassificationConfig?: (google.cloud.datalabeling.v1beta1.ITextClassificationConfig|null);

                    /** AnnotatedDatasetMetadata textEntityExtractionConfig */
                    textEntityExtractionConfig?: (google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig|null);

                    /** AnnotatedDatasetMetadata humanAnnotationConfig */
                    humanAnnotationConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);
                }

                /** Represents an AnnotatedDatasetMetadata. */
                class AnnotatedDatasetMetadata implements IAnnotatedDatasetMetadata {

                    /**
                     * Constructs a new AnnotatedDatasetMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotatedDatasetMetadata);

                    /** AnnotatedDatasetMetadata imageClassificationConfig. */
                    public imageClassificationConfig?: (google.cloud.datalabeling.v1beta1.IImageClassificationConfig|null);

                    /** AnnotatedDatasetMetadata boundingPolyConfig. */
                    public boundingPolyConfig?: (google.cloud.datalabeling.v1beta1.IBoundingPolyConfig|null);

                    /** AnnotatedDatasetMetadata polylineConfig. */
                    public polylineConfig?: (google.cloud.datalabeling.v1beta1.IPolylineConfig|null);

                    /** AnnotatedDatasetMetadata segmentationConfig. */
                    public segmentationConfig?: (google.cloud.datalabeling.v1beta1.ISegmentationConfig|null);

                    /** AnnotatedDatasetMetadata videoClassificationConfig. */
                    public videoClassificationConfig?: (google.cloud.datalabeling.v1beta1.IVideoClassificationConfig|null);

                    /** AnnotatedDatasetMetadata objectDetectionConfig. */
                    public objectDetectionConfig?: (google.cloud.datalabeling.v1beta1.IObjectDetectionConfig|null);

                    /** AnnotatedDatasetMetadata objectTrackingConfig. */
                    public objectTrackingConfig?: (google.cloud.datalabeling.v1beta1.IObjectTrackingConfig|null);

                    /** AnnotatedDatasetMetadata eventConfig. */
                    public eventConfig?: (google.cloud.datalabeling.v1beta1.IEventConfig|null);

                    /** AnnotatedDatasetMetadata textClassificationConfig. */
                    public textClassificationConfig?: (google.cloud.datalabeling.v1beta1.ITextClassificationConfig|null);

                    /** AnnotatedDatasetMetadata textEntityExtractionConfig. */
                    public textEntityExtractionConfig?: (google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig|null);

                    /** AnnotatedDatasetMetadata humanAnnotationConfig. */
                    public humanAnnotationConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** AnnotatedDatasetMetadata annotationRequestConfig. */
                    public annotationRequestConfig?: ("imageClassificationConfig"|"boundingPolyConfig"|"polylineConfig"|"segmentationConfig"|"videoClassificationConfig"|"objectDetectionConfig"|"objectTrackingConfig"|"eventConfig"|"textClassificationConfig"|"textEntityExtractionConfig");

                    /**
                     * Creates a new AnnotatedDatasetMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotatedDatasetMetadata instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotatedDatasetMetadata): google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata;

                    /**
                     * Encodes the specified AnnotatedDatasetMetadata message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata.verify|verify} messages.
                     * @param message AnnotatedDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotatedDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotatedDatasetMetadata message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata.verify|verify} messages.
                     * @param message AnnotatedDatasetMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotatedDatasetMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotatedDatasetMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotatedDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata;

                    /**
                     * Decodes an AnnotatedDatasetMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotatedDatasetMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata;

                    /**
                     * Verifies an AnnotatedDatasetMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotatedDatasetMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotatedDatasetMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata;

                    /**
                     * Creates a plain object from an AnnotatedDatasetMetadata message. Also converts values to other types if specified.
                     * @param message AnnotatedDatasetMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotatedDatasetMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Example. */
                interface IExample {

                    /** Example imagePayload */
                    imagePayload?: (google.cloud.datalabeling.v1beta1.IImagePayload|null);

                    /** Example textPayload */
                    textPayload?: (google.cloud.datalabeling.v1beta1.ITextPayload|null);

                    /** Example videoPayload */
                    videoPayload?: (google.cloud.datalabeling.v1beta1.IVideoPayload|null);

                    /** Example name */
                    name?: (string|null);

                    /** Example annotations */
                    annotations?: (google.cloud.datalabeling.v1beta1.IAnnotation[]|null);
                }

                /** Represents an Example. */
                class Example implements IExample {

                    /**
                     * Constructs a new Example.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IExample);

                    /** Example imagePayload. */
                    public imagePayload?: (google.cloud.datalabeling.v1beta1.IImagePayload|null);

                    /** Example textPayload. */
                    public textPayload?: (google.cloud.datalabeling.v1beta1.ITextPayload|null);

                    /** Example videoPayload. */
                    public videoPayload?: (google.cloud.datalabeling.v1beta1.IVideoPayload|null);

                    /** Example name. */
                    public name: string;

                    /** Example annotations. */
                    public annotations: google.cloud.datalabeling.v1beta1.IAnnotation[];

                    /** Example payload. */
                    public payload?: ("imagePayload"|"textPayload"|"videoPayload");

                    /**
                     * Creates a new Example instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Example instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IExample): google.cloud.datalabeling.v1beta1.Example;

                    /**
                     * Encodes the specified Example message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Example.verify|verify} messages.
                     * @param message Example message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Example message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Example.verify|verify} messages.
                     * @param message Example message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Example message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Example
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Example;

                    /**
                     * Decodes an Example message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Example
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Example;

                    /**
                     * Verifies an Example message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Example message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Example
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Example;

                    /**
                     * Creates a plain object from an Example message. Also converts values to other types if specified.
                     * @param message Example
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Example, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Example to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** AnnotationSource enum. */
                enum AnnotationSource {
                    ANNOTATION_SOURCE_UNSPECIFIED = 0,
                    OPERATOR = 3
                }

                /** Properties of an Annotation. */
                interface IAnnotation {

                    /** Annotation name */
                    name?: (string|null);

                    /** Annotation annotationSource */
                    annotationSource?: (google.cloud.datalabeling.v1beta1.AnnotationSource|null);

                    /** Annotation annotationValue */
                    annotationValue?: (google.cloud.datalabeling.v1beta1.IAnnotationValue|null);

                    /** Annotation annotationMetadata */
                    annotationMetadata?: (google.cloud.datalabeling.v1beta1.IAnnotationMetadata|null);

                    /** Annotation annotationSentiment */
                    annotationSentiment?: (google.cloud.datalabeling.v1beta1.AnnotationSentiment|null);
                }

                /** Represents an Annotation. */
                class Annotation implements IAnnotation {

                    /**
                     * Constructs a new Annotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotation);

                    /** Annotation name. */
                    public name: string;

                    /** Annotation annotationSource. */
                    public annotationSource: google.cloud.datalabeling.v1beta1.AnnotationSource;

                    /** Annotation annotationValue. */
                    public annotationValue?: (google.cloud.datalabeling.v1beta1.IAnnotationValue|null);

                    /** Annotation annotationMetadata. */
                    public annotationMetadata?: (google.cloud.datalabeling.v1beta1.IAnnotationMetadata|null);

                    /** Annotation annotationSentiment. */
                    public annotationSentiment: google.cloud.datalabeling.v1beta1.AnnotationSentiment;

                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Annotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotation): google.cloud.datalabeling.v1beta1.Annotation;

                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Annotation.verify|verify} messages.
                     * @param message Annotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Annotation.verify|verify} messages.
                     * @param message Annotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Annotation;

                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Annotation;

                    /**
                     * Verifies an Annotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Annotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Annotation;

                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @param message Annotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Annotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** AnnotationSentiment enum. */
                enum AnnotationSentiment {
                    ANNOTATION_SENTIMENT_UNSPECIFIED = 0,
                    NEGATIVE = 1,
                    POSITIVE = 2
                }

                /** AnnotationType enum. */
                enum AnnotationType {
                    ANNOTATION_TYPE_UNSPECIFIED = 0,
                    IMAGE_CLASSIFICATION_ANNOTATION = 1,
                    IMAGE_BOUNDING_BOX_ANNOTATION = 2,
                    IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = 13,
                    IMAGE_BOUNDING_POLY_ANNOTATION = 10,
                    IMAGE_POLYLINE_ANNOTATION = 11,
                    IMAGE_SEGMENTATION_ANNOTATION = 12,
                    VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = 3,
                    VIDEO_OBJECT_TRACKING_ANNOTATION = 4,
                    VIDEO_OBJECT_DETECTION_ANNOTATION = 5,
                    VIDEO_EVENT_ANNOTATION = 6,
                    TEXT_CLASSIFICATION_ANNOTATION = 8,
                    TEXT_ENTITY_EXTRACTION_ANNOTATION = 9,
                    GENERAL_CLASSIFICATION_ANNOTATION = 14
                }

                /** Properties of an AnnotationValue. */
                interface IAnnotationValue {

                    /** AnnotationValue imageClassificationAnnotation */
                    imageClassificationAnnotation?: (google.cloud.datalabeling.v1beta1.IImageClassificationAnnotation|null);

                    /** AnnotationValue imageBoundingPolyAnnotation */
                    imageBoundingPolyAnnotation?: (google.cloud.datalabeling.v1beta1.IImageBoundingPolyAnnotation|null);

                    /** AnnotationValue imagePolylineAnnotation */
                    imagePolylineAnnotation?: (google.cloud.datalabeling.v1beta1.IImagePolylineAnnotation|null);

                    /** AnnotationValue imageSegmentationAnnotation */
                    imageSegmentationAnnotation?: (google.cloud.datalabeling.v1beta1.IImageSegmentationAnnotation|null);

                    /** AnnotationValue textClassificationAnnotation */
                    textClassificationAnnotation?: (google.cloud.datalabeling.v1beta1.ITextClassificationAnnotation|null);

                    /** AnnotationValue textEntityExtractionAnnotation */
                    textEntityExtractionAnnotation?: (google.cloud.datalabeling.v1beta1.ITextEntityExtractionAnnotation|null);

                    /** AnnotationValue videoClassificationAnnotation */
                    videoClassificationAnnotation?: (google.cloud.datalabeling.v1beta1.IVideoClassificationAnnotation|null);

                    /** AnnotationValue videoObjectTrackingAnnotation */
                    videoObjectTrackingAnnotation?: (google.cloud.datalabeling.v1beta1.IVideoObjectTrackingAnnotation|null);

                    /** AnnotationValue videoEventAnnotation */
                    videoEventAnnotation?: (google.cloud.datalabeling.v1beta1.IVideoEventAnnotation|null);
                }

                /** Represents an AnnotationValue. */
                class AnnotationValue implements IAnnotationValue {

                    /**
                     * Constructs a new AnnotationValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotationValue);

                    /** AnnotationValue imageClassificationAnnotation. */
                    public imageClassificationAnnotation?: (google.cloud.datalabeling.v1beta1.IImageClassificationAnnotation|null);

                    /** AnnotationValue imageBoundingPolyAnnotation. */
                    public imageBoundingPolyAnnotation?: (google.cloud.datalabeling.v1beta1.IImageBoundingPolyAnnotation|null);

                    /** AnnotationValue imagePolylineAnnotation. */
                    public imagePolylineAnnotation?: (google.cloud.datalabeling.v1beta1.IImagePolylineAnnotation|null);

                    /** AnnotationValue imageSegmentationAnnotation. */
                    public imageSegmentationAnnotation?: (google.cloud.datalabeling.v1beta1.IImageSegmentationAnnotation|null);

                    /** AnnotationValue textClassificationAnnotation. */
                    public textClassificationAnnotation?: (google.cloud.datalabeling.v1beta1.ITextClassificationAnnotation|null);

                    /** AnnotationValue textEntityExtractionAnnotation. */
                    public textEntityExtractionAnnotation?: (google.cloud.datalabeling.v1beta1.ITextEntityExtractionAnnotation|null);

                    /** AnnotationValue videoClassificationAnnotation. */
                    public videoClassificationAnnotation?: (google.cloud.datalabeling.v1beta1.IVideoClassificationAnnotation|null);

                    /** AnnotationValue videoObjectTrackingAnnotation. */
                    public videoObjectTrackingAnnotation?: (google.cloud.datalabeling.v1beta1.IVideoObjectTrackingAnnotation|null);

                    /** AnnotationValue videoEventAnnotation. */
                    public videoEventAnnotation?: (google.cloud.datalabeling.v1beta1.IVideoEventAnnotation|null);

                    /** AnnotationValue valueType. */
                    public valueType?: ("imageClassificationAnnotation"|"imageBoundingPolyAnnotation"|"imagePolylineAnnotation"|"imageSegmentationAnnotation"|"textClassificationAnnotation"|"textEntityExtractionAnnotation"|"videoClassificationAnnotation"|"videoObjectTrackingAnnotation"|"videoEventAnnotation");

                    /**
                     * Creates a new AnnotationValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationValue instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotationValue): google.cloud.datalabeling.v1beta1.AnnotationValue;

                    /**
                     * Encodes the specified AnnotationValue message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationValue.verify|verify} messages.
                     * @param message AnnotationValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotationValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationValue message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationValue.verify|verify} messages.
                     * @param message AnnotationValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotationValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.AnnotationValue;

                    /**
                     * Decodes an AnnotationValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.AnnotationValue;

                    /**
                     * Verifies an AnnotationValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.AnnotationValue;

                    /**
                     * Creates a plain object from an AnnotationValue message. Also converts values to other types if specified.
                     * @param message AnnotationValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.AnnotationValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImageClassificationAnnotation. */
                interface IImageClassificationAnnotation {

                    /** ImageClassificationAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);
                }

                /** Represents an ImageClassificationAnnotation. */
                class ImageClassificationAnnotation implements IImageClassificationAnnotation {

                    /**
                     * Constructs a new ImageClassificationAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImageClassificationAnnotation);

                    /** ImageClassificationAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /**
                     * Creates a new ImageClassificationAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageClassificationAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImageClassificationAnnotation): google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation;

                    /**
                     * Encodes the specified ImageClassificationAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation.verify|verify} messages.
                     * @param message ImageClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImageClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageClassificationAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation.verify|verify} messages.
                     * @param message ImageClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImageClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageClassificationAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation;

                    /**
                     * Decodes an ImageClassificationAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation;

                    /**
                     * Verifies an ImageClassificationAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageClassificationAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageClassificationAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation;

                    /**
                     * Creates a plain object from an ImageClassificationAnnotation message. Also converts values to other types if specified.
                     * @param message ImageClassificationAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageClassificationAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Vertex. */
                interface IVertex {

                    /** Vertex x */
                    x?: (number|null);

                    /** Vertex y */
                    y?: (number|null);
                }

                /** Represents a Vertex. */
                class Vertex implements IVertex {

                    /**
                     * Constructs a new Vertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVertex);

                    /** Vertex x. */
                    public x: number;

                    /** Vertex y. */
                    public y: number;

                    /**
                     * Creates a new Vertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vertex instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVertex): google.cloud.datalabeling.v1beta1.Vertex;

                    /**
                     * Encodes the specified Vertex message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Vertex message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Vertex;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Vertex;

                    /**
                     * Verifies a Vertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Vertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Vertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Vertex;

                    /**
                     * Creates a plain object from a Vertex message. Also converts values to other types if specified.
                     * @param message Vertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Vertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Vertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NormalizedVertex. */
                interface INormalizedVertex {

                    /** NormalizedVertex x */
                    x?: (number|null);

                    /** NormalizedVertex y */
                    y?: (number|null);
                }

                /** Represents a NormalizedVertex. */
                class NormalizedVertex implements INormalizedVertex {

                    /**
                     * Constructs a new NormalizedVertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.INormalizedVertex);

                    /** NormalizedVertex x. */
                    public x: number;

                    /** NormalizedVertex y. */
                    public y: number;

                    /**
                     * Creates a new NormalizedVertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedVertex instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.INormalizedVertex): google.cloud.datalabeling.v1beta1.NormalizedVertex;

                    /**
                     * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.NormalizedVertex;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.NormalizedVertex;

                    /**
                     * Verifies a NormalizedVertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedVertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedVertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.NormalizedVertex;

                    /**
                     * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                     * @param message NormalizedVertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.NormalizedVertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedVertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BoundingPoly. */
                interface IBoundingPoly {

                    /** BoundingPoly vertices */
                    vertices?: (google.cloud.datalabeling.v1beta1.IVertex[]|null);
                }

                /** Represents a BoundingPoly. */
                class BoundingPoly implements IBoundingPoly {

                    /**
                     * Constructs a new BoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IBoundingPoly);

                    /** BoundingPoly vertices. */
                    public vertices: google.cloud.datalabeling.v1beta1.IVertex[];

                    /**
                     * Creates a new BoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingPoly instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IBoundingPoly): google.cloud.datalabeling.v1beta1.BoundingPoly;

                    /**
                     * Encodes the specified BoundingPoly message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingPoly message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.BoundingPoly;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.BoundingPoly;

                    /**
                     * Verifies a BoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.BoundingPoly;

                    /**
                     * Creates a plain object from a BoundingPoly message. Also converts values to other types if specified.
                     * @param message BoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.BoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NormalizedBoundingPoly. */
                interface INormalizedBoundingPoly {

                    /** NormalizedBoundingPoly normalizedVertices */
                    normalizedVertices?: (google.cloud.datalabeling.v1beta1.INormalizedVertex[]|null);
                }

                /** Represents a NormalizedBoundingPoly. */
                class NormalizedBoundingPoly implements INormalizedBoundingPoly {

                    /**
                     * Constructs a new NormalizedBoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly);

                    /** NormalizedBoundingPoly normalizedVertices. */
                    public normalizedVertices: google.cloud.datalabeling.v1beta1.INormalizedVertex[];

                    /**
                     * Creates a new NormalizedBoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedBoundingPoly instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly): google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly;

                    /**
                     * Encodes the specified NormalizedBoundingPoly message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly.verify|verify} messages.
                     * @param message NormalizedBoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedBoundingPoly message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly.verify|verify} messages.
                     * @param message NormalizedBoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedBoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedBoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly;

                    /**
                     * Decodes a NormalizedBoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedBoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly;

                    /**
                     * Verifies a NormalizedBoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedBoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedBoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly;

                    /**
                     * Creates a plain object from a NormalizedBoundingPoly message. Also converts values to other types if specified.
                     * @param message NormalizedBoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedBoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImageBoundingPolyAnnotation. */
                interface IImageBoundingPolyAnnotation {

                    /** ImageBoundingPolyAnnotation boundingPoly */
                    boundingPoly?: (google.cloud.datalabeling.v1beta1.IBoundingPoly|null);

                    /** ImageBoundingPolyAnnotation normalizedBoundingPoly */
                    normalizedBoundingPoly?: (google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly|null);

                    /** ImageBoundingPolyAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);
                }

                /** Represents an ImageBoundingPolyAnnotation. */
                class ImageBoundingPolyAnnotation implements IImageBoundingPolyAnnotation {

                    /**
                     * Constructs a new ImageBoundingPolyAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImageBoundingPolyAnnotation);

                    /** ImageBoundingPolyAnnotation boundingPoly. */
                    public boundingPoly?: (google.cloud.datalabeling.v1beta1.IBoundingPoly|null);

                    /** ImageBoundingPolyAnnotation normalizedBoundingPoly. */
                    public normalizedBoundingPoly?: (google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly|null);

                    /** ImageBoundingPolyAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** ImageBoundingPolyAnnotation boundedArea. */
                    public boundedArea?: ("boundingPoly"|"normalizedBoundingPoly");

                    /**
                     * Creates a new ImageBoundingPolyAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageBoundingPolyAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImageBoundingPolyAnnotation): google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation;

                    /**
                     * Encodes the specified ImageBoundingPolyAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation.verify|verify} messages.
                     * @param message ImageBoundingPolyAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImageBoundingPolyAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageBoundingPolyAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation.verify|verify} messages.
                     * @param message ImageBoundingPolyAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImageBoundingPolyAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageBoundingPolyAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageBoundingPolyAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation;

                    /**
                     * Decodes an ImageBoundingPolyAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageBoundingPolyAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation;

                    /**
                     * Verifies an ImageBoundingPolyAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageBoundingPolyAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageBoundingPolyAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation;

                    /**
                     * Creates a plain object from an ImageBoundingPolyAnnotation message. Also converts values to other types if specified.
                     * @param message ImageBoundingPolyAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageBoundingPolyAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Polyline. */
                interface IPolyline {

                    /** Polyline vertices */
                    vertices?: (google.cloud.datalabeling.v1beta1.IVertex[]|null);
                }

                /** Represents a Polyline. */
                class Polyline implements IPolyline {

                    /**
                     * Constructs a new Polyline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IPolyline);

                    /** Polyline vertices. */
                    public vertices: google.cloud.datalabeling.v1beta1.IVertex[];

                    /**
                     * Creates a new Polyline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Polyline instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IPolyline): google.cloud.datalabeling.v1beta1.Polyline;

                    /**
                     * Encodes the specified Polyline message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Polyline.verify|verify} messages.
                     * @param message Polyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Polyline message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Polyline.verify|verify} messages.
                     * @param message Polyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Polyline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Polyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Polyline;

                    /**
                     * Decodes a Polyline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Polyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Polyline;

                    /**
                     * Verifies a Polyline message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Polyline message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Polyline
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Polyline;

                    /**
                     * Creates a plain object from a Polyline message. Also converts values to other types if specified.
                     * @param message Polyline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Polyline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Polyline to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NormalizedPolyline. */
                interface INormalizedPolyline {

                    /** NormalizedPolyline normalizedVertices */
                    normalizedVertices?: (google.cloud.datalabeling.v1beta1.INormalizedVertex[]|null);
                }

                /** Represents a NormalizedPolyline. */
                class NormalizedPolyline implements INormalizedPolyline {

                    /**
                     * Constructs a new NormalizedPolyline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.INormalizedPolyline);

                    /** NormalizedPolyline normalizedVertices. */
                    public normalizedVertices: google.cloud.datalabeling.v1beta1.INormalizedVertex[];

                    /**
                     * Creates a new NormalizedPolyline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedPolyline instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.INormalizedPolyline): google.cloud.datalabeling.v1beta1.NormalizedPolyline;

                    /**
                     * Encodes the specified NormalizedPolyline message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.NormalizedPolyline.verify|verify} messages.
                     * @param message NormalizedPolyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.INormalizedPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedPolyline message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.NormalizedPolyline.verify|verify} messages.
                     * @param message NormalizedPolyline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.INormalizedPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedPolyline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedPolyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.NormalizedPolyline;

                    /**
                     * Decodes a NormalizedPolyline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedPolyline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.NormalizedPolyline;

                    /**
                     * Verifies a NormalizedPolyline message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedPolyline message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedPolyline
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.NormalizedPolyline;

                    /**
                     * Creates a plain object from a NormalizedPolyline message. Also converts values to other types if specified.
                     * @param message NormalizedPolyline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.NormalizedPolyline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedPolyline to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImagePolylineAnnotation. */
                interface IImagePolylineAnnotation {

                    /** ImagePolylineAnnotation polyline */
                    polyline?: (google.cloud.datalabeling.v1beta1.IPolyline|null);

                    /** ImagePolylineAnnotation normalizedPolyline */
                    normalizedPolyline?: (google.cloud.datalabeling.v1beta1.INormalizedPolyline|null);

                    /** ImagePolylineAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);
                }

                /** Represents an ImagePolylineAnnotation. */
                class ImagePolylineAnnotation implements IImagePolylineAnnotation {

                    /**
                     * Constructs a new ImagePolylineAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImagePolylineAnnotation);

                    /** ImagePolylineAnnotation polyline. */
                    public polyline?: (google.cloud.datalabeling.v1beta1.IPolyline|null);

                    /** ImagePolylineAnnotation normalizedPolyline. */
                    public normalizedPolyline?: (google.cloud.datalabeling.v1beta1.INormalizedPolyline|null);

                    /** ImagePolylineAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** ImagePolylineAnnotation poly. */
                    public poly?: ("polyline"|"normalizedPolyline");

                    /**
                     * Creates a new ImagePolylineAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImagePolylineAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImagePolylineAnnotation): google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation;

                    /**
                     * Encodes the specified ImagePolylineAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation.verify|verify} messages.
                     * @param message ImagePolylineAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImagePolylineAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImagePolylineAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation.verify|verify} messages.
                     * @param message ImagePolylineAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImagePolylineAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImagePolylineAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImagePolylineAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation;

                    /**
                     * Decodes an ImagePolylineAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImagePolylineAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation;

                    /**
                     * Verifies an ImagePolylineAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImagePolylineAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImagePolylineAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation;

                    /**
                     * Creates a plain object from an ImagePolylineAnnotation message. Also converts values to other types if specified.
                     * @param message ImagePolylineAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImagePolylineAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImageSegmentationAnnotation. */
                interface IImageSegmentationAnnotation {

                    /** ImageSegmentationAnnotation annotationColors */
                    annotationColors?: ({ [k: string]: google.cloud.datalabeling.v1beta1.IAnnotationSpec }|null);

                    /** ImageSegmentationAnnotation mimeType */
                    mimeType?: (string|null);

                    /** ImageSegmentationAnnotation imageBytes */
                    imageBytes?: (Uint8Array|null);
                }

                /** Represents an ImageSegmentationAnnotation. */
                class ImageSegmentationAnnotation implements IImageSegmentationAnnotation {

                    /**
                     * Constructs a new ImageSegmentationAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImageSegmentationAnnotation);

                    /** ImageSegmentationAnnotation annotationColors. */
                    public annotationColors: { [k: string]: google.cloud.datalabeling.v1beta1.IAnnotationSpec };

                    /** ImageSegmentationAnnotation mimeType. */
                    public mimeType: string;

                    /** ImageSegmentationAnnotation imageBytes. */
                    public imageBytes: Uint8Array;

                    /**
                     * Creates a new ImageSegmentationAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageSegmentationAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImageSegmentationAnnotation): google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation;

                    /**
                     * Encodes the specified ImageSegmentationAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation.verify|verify} messages.
                     * @param message ImageSegmentationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImageSegmentationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageSegmentationAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation.verify|verify} messages.
                     * @param message ImageSegmentationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImageSegmentationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageSegmentationAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageSegmentationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation;

                    /**
                     * Decodes an ImageSegmentationAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageSegmentationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation;

                    /**
                     * Verifies an ImageSegmentationAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageSegmentationAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageSegmentationAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation;

                    /**
                     * Creates a plain object from an ImageSegmentationAnnotation message. Also converts values to other types if specified.
                     * @param message ImageSegmentationAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageSegmentationAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TextClassificationAnnotation. */
                interface ITextClassificationAnnotation {

                    /** TextClassificationAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);
                }

                /** Represents a TextClassificationAnnotation. */
                class TextClassificationAnnotation implements ITextClassificationAnnotation {

                    /**
                     * Constructs a new TextClassificationAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITextClassificationAnnotation);

                    /** TextClassificationAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /**
                     * Creates a new TextClassificationAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextClassificationAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITextClassificationAnnotation): google.cloud.datalabeling.v1beta1.TextClassificationAnnotation;

                    /**
                     * Encodes the specified TextClassificationAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextClassificationAnnotation.verify|verify} messages.
                     * @param message TextClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITextClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextClassificationAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextClassificationAnnotation.verify|verify} messages.
                     * @param message TextClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITextClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextClassificationAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TextClassificationAnnotation;

                    /**
                     * Decodes a TextClassificationAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TextClassificationAnnotation;

                    /**
                     * Verifies a TextClassificationAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextClassificationAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextClassificationAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TextClassificationAnnotation;

                    /**
                     * Creates a plain object from a TextClassificationAnnotation message. Also converts values to other types if specified.
                     * @param message TextClassificationAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TextClassificationAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextClassificationAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TextEntityExtractionAnnotation. */
                interface ITextEntityExtractionAnnotation {

                    /** TextEntityExtractionAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** TextEntityExtractionAnnotation sequentialSegment */
                    sequentialSegment?: (google.cloud.datalabeling.v1beta1.ISequentialSegment|null);
                }

                /** Represents a TextEntityExtractionAnnotation. */
                class TextEntityExtractionAnnotation implements ITextEntityExtractionAnnotation {

                    /**
                     * Constructs a new TextEntityExtractionAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITextEntityExtractionAnnotation);

                    /** TextEntityExtractionAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** TextEntityExtractionAnnotation sequentialSegment. */
                    public sequentialSegment?: (google.cloud.datalabeling.v1beta1.ISequentialSegment|null);

                    /**
                     * Creates a new TextEntityExtractionAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextEntityExtractionAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITextEntityExtractionAnnotation): google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation;

                    /**
                     * Encodes the specified TextEntityExtractionAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation.verify|verify} messages.
                     * @param message TextEntityExtractionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITextEntityExtractionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextEntityExtractionAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation.verify|verify} messages.
                     * @param message TextEntityExtractionAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITextEntityExtractionAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextEntityExtractionAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextEntityExtractionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation;

                    /**
                     * Decodes a TextEntityExtractionAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextEntityExtractionAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation;

                    /**
                     * Verifies a TextEntityExtractionAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextEntityExtractionAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextEntityExtractionAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation;

                    /**
                     * Creates a plain object from a TextEntityExtractionAnnotation message. Also converts values to other types if specified.
                     * @param message TextEntityExtractionAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TextEntityExtractionAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextEntityExtractionAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SequentialSegment. */
                interface ISequentialSegment {

                    /** SequentialSegment start */
                    start?: (number|null);

                    /** SequentialSegment end */
                    end?: (number|null);
                }

                /** Represents a SequentialSegment. */
                class SequentialSegment implements ISequentialSegment {

                    /**
                     * Constructs a new SequentialSegment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISequentialSegment);

                    /** SequentialSegment start. */
                    public start: number;

                    /** SequentialSegment end. */
                    public end: number;

                    /**
                     * Creates a new SequentialSegment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SequentialSegment instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISequentialSegment): google.cloud.datalabeling.v1beta1.SequentialSegment;

                    /**
                     * Encodes the specified SequentialSegment message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SequentialSegment.verify|verify} messages.
                     * @param message SequentialSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISequentialSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SequentialSegment message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SequentialSegment.verify|verify} messages.
                     * @param message SequentialSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISequentialSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SequentialSegment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SequentialSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SequentialSegment;

                    /**
                     * Decodes a SequentialSegment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SequentialSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SequentialSegment;

                    /**
                     * Verifies a SequentialSegment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SequentialSegment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SequentialSegment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SequentialSegment;

                    /**
                     * Creates a plain object from a SequentialSegment message. Also converts values to other types if specified.
                     * @param message SequentialSegment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SequentialSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SequentialSegment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeSegment. */
                interface ITimeSegment {

                    /** TimeSegment startTimeOffset */
                    startTimeOffset?: (google.protobuf.IDuration|null);

                    /** TimeSegment endTimeOffset */
                    endTimeOffset?: (google.protobuf.IDuration|null);
                }

                /** Represents a TimeSegment. */
                class TimeSegment implements ITimeSegment {

                    /**
                     * Constructs a new TimeSegment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITimeSegment);

                    /** TimeSegment startTimeOffset. */
                    public startTimeOffset?: (google.protobuf.IDuration|null);

                    /** TimeSegment endTimeOffset. */
                    public endTimeOffset?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new TimeSegment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSegment instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITimeSegment): google.cloud.datalabeling.v1beta1.TimeSegment;

                    /**
                     * Encodes the specified TimeSegment message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TimeSegment.verify|verify} messages.
                     * @param message TimeSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITimeSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeSegment message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TimeSegment.verify|verify} messages.
                     * @param message TimeSegment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITimeSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeSegment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TimeSegment;

                    /**
                     * Decodes a TimeSegment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSegment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TimeSegment;

                    /**
                     * Verifies a TimeSegment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSegment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSegment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TimeSegment;

                    /**
                     * Creates a plain object from a TimeSegment message. Also converts values to other types if specified.
                     * @param message TimeSegment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TimeSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSegment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VideoClassificationAnnotation. */
                interface IVideoClassificationAnnotation {

                    /** VideoClassificationAnnotation timeSegment */
                    timeSegment?: (google.cloud.datalabeling.v1beta1.ITimeSegment|null);

                    /** VideoClassificationAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);
                }

                /** Represents a VideoClassificationAnnotation. */
                class VideoClassificationAnnotation implements IVideoClassificationAnnotation {

                    /**
                     * Constructs a new VideoClassificationAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVideoClassificationAnnotation);

                    /** VideoClassificationAnnotation timeSegment. */
                    public timeSegment?: (google.cloud.datalabeling.v1beta1.ITimeSegment|null);

                    /** VideoClassificationAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /**
                     * Creates a new VideoClassificationAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoClassificationAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVideoClassificationAnnotation): google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation;

                    /**
                     * Encodes the specified VideoClassificationAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation.verify|verify} messages.
                     * @param message VideoClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVideoClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoClassificationAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation.verify|verify} messages.
                     * @param message VideoClassificationAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVideoClassificationAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoClassificationAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation;

                    /**
                     * Decodes a VideoClassificationAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoClassificationAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation;

                    /**
                     * Verifies a VideoClassificationAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoClassificationAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoClassificationAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation;

                    /**
                     * Creates a plain object from a VideoClassificationAnnotation message. Also converts values to other types if specified.
                     * @param message VideoClassificationAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoClassificationAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ObjectTrackingFrame. */
                interface IObjectTrackingFrame {

                    /** ObjectTrackingFrame boundingPoly */
                    boundingPoly?: (google.cloud.datalabeling.v1beta1.IBoundingPoly|null);

                    /** ObjectTrackingFrame normalizedBoundingPoly */
                    normalizedBoundingPoly?: (google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly|null);

                    /** ObjectTrackingFrame timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);
                }

                /** Represents an ObjectTrackingFrame. */
                class ObjectTrackingFrame implements IObjectTrackingFrame {

                    /**
                     * Constructs a new ObjectTrackingFrame.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IObjectTrackingFrame);

                    /** ObjectTrackingFrame boundingPoly. */
                    public boundingPoly?: (google.cloud.datalabeling.v1beta1.IBoundingPoly|null);

                    /** ObjectTrackingFrame normalizedBoundingPoly. */
                    public normalizedBoundingPoly?: (google.cloud.datalabeling.v1beta1.INormalizedBoundingPoly|null);

                    /** ObjectTrackingFrame timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /** ObjectTrackingFrame boundedArea. */
                    public boundedArea?: ("boundingPoly"|"normalizedBoundingPoly");

                    /**
                     * Creates a new ObjectTrackingFrame instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectTrackingFrame instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IObjectTrackingFrame): google.cloud.datalabeling.v1beta1.ObjectTrackingFrame;

                    /**
                     * Encodes the specified ObjectTrackingFrame message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectTrackingFrame.verify|verify} messages.
                     * @param message ObjectTrackingFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IObjectTrackingFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectTrackingFrame message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectTrackingFrame.verify|verify} messages.
                     * @param message ObjectTrackingFrame message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IObjectTrackingFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectTrackingFrame message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectTrackingFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ObjectTrackingFrame;

                    /**
                     * Decodes an ObjectTrackingFrame message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectTrackingFrame
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ObjectTrackingFrame;

                    /**
                     * Verifies an ObjectTrackingFrame message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectTrackingFrame message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectTrackingFrame
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ObjectTrackingFrame;

                    /**
                     * Creates a plain object from an ObjectTrackingFrame message. Also converts values to other types if specified.
                     * @param message ObjectTrackingFrame
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ObjectTrackingFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectTrackingFrame to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VideoObjectTrackingAnnotation. */
                interface IVideoObjectTrackingAnnotation {

                    /** VideoObjectTrackingAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** VideoObjectTrackingAnnotation timeSegment */
                    timeSegment?: (google.cloud.datalabeling.v1beta1.ITimeSegment|null);

                    /** VideoObjectTrackingAnnotation objectTrackingFrames */
                    objectTrackingFrames?: (google.cloud.datalabeling.v1beta1.IObjectTrackingFrame[]|null);
                }

                /** Represents a VideoObjectTrackingAnnotation. */
                class VideoObjectTrackingAnnotation implements IVideoObjectTrackingAnnotation {

                    /**
                     * Constructs a new VideoObjectTrackingAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVideoObjectTrackingAnnotation);

                    /** VideoObjectTrackingAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** VideoObjectTrackingAnnotation timeSegment. */
                    public timeSegment?: (google.cloud.datalabeling.v1beta1.ITimeSegment|null);

                    /** VideoObjectTrackingAnnotation objectTrackingFrames. */
                    public objectTrackingFrames: google.cloud.datalabeling.v1beta1.IObjectTrackingFrame[];

                    /**
                     * Creates a new VideoObjectTrackingAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoObjectTrackingAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVideoObjectTrackingAnnotation): google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation;

                    /**
                     * Encodes the specified VideoObjectTrackingAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation.verify|verify} messages.
                     * @param message VideoObjectTrackingAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVideoObjectTrackingAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoObjectTrackingAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation.verify|verify} messages.
                     * @param message VideoObjectTrackingAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVideoObjectTrackingAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoObjectTrackingAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoObjectTrackingAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation;

                    /**
                     * Decodes a VideoObjectTrackingAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoObjectTrackingAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation;

                    /**
                     * Verifies a VideoObjectTrackingAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoObjectTrackingAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoObjectTrackingAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation;

                    /**
                     * Creates a plain object from a VideoObjectTrackingAnnotation message. Also converts values to other types if specified.
                     * @param message VideoObjectTrackingAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoObjectTrackingAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VideoEventAnnotation. */
                interface IVideoEventAnnotation {

                    /** VideoEventAnnotation annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** VideoEventAnnotation timeSegment */
                    timeSegment?: (google.cloud.datalabeling.v1beta1.ITimeSegment|null);
                }

                /** Represents a VideoEventAnnotation. */
                class VideoEventAnnotation implements IVideoEventAnnotation {

                    /**
                     * Constructs a new VideoEventAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVideoEventAnnotation);

                    /** VideoEventAnnotation annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** VideoEventAnnotation timeSegment. */
                    public timeSegment?: (google.cloud.datalabeling.v1beta1.ITimeSegment|null);

                    /**
                     * Creates a new VideoEventAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoEventAnnotation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVideoEventAnnotation): google.cloud.datalabeling.v1beta1.VideoEventAnnotation;

                    /**
                     * Encodes the specified VideoEventAnnotation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoEventAnnotation.verify|verify} messages.
                     * @param message VideoEventAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVideoEventAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoEventAnnotation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoEventAnnotation.verify|verify} messages.
                     * @param message VideoEventAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVideoEventAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoEventAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoEventAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoEventAnnotation;

                    /**
                     * Decodes a VideoEventAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoEventAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoEventAnnotation;

                    /**
                     * Verifies a VideoEventAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoEventAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoEventAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoEventAnnotation;

                    /**
                     * Creates a plain object from a VideoEventAnnotation message. Also converts values to other types if specified.
                     * @param message VideoEventAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.VideoEventAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoEventAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotationMetadata. */
                interface IAnnotationMetadata {

                    /** AnnotationMetadata operatorMetadata */
                    operatorMetadata?: (google.cloud.datalabeling.v1beta1.IOperatorMetadata|null);
                }

                /** Represents an AnnotationMetadata. */
                class AnnotationMetadata implements IAnnotationMetadata {

                    /**
                     * Constructs a new AnnotationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAnnotationMetadata);

                    /** AnnotationMetadata operatorMetadata. */
                    public operatorMetadata?: (google.cloud.datalabeling.v1beta1.IOperatorMetadata|null);

                    /**
                     * Creates a new AnnotationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationMetadata instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAnnotationMetadata): google.cloud.datalabeling.v1beta1.AnnotationMetadata;

                    /**
                     * Encodes the specified AnnotationMetadata message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationMetadata.verify|verify} messages.
                     * @param message AnnotationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAnnotationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationMetadata message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.AnnotationMetadata.verify|verify} messages.
                     * @param message AnnotationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAnnotationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.AnnotationMetadata;

                    /**
                     * Decodes an AnnotationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.AnnotationMetadata;

                    /**
                     * Verifies an AnnotationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.AnnotationMetadata;

                    /**
                     * Creates a plain object from an AnnotationMetadata message. Also converts values to other types if specified.
                     * @param message AnnotationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.AnnotationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperatorMetadata. */
                interface IOperatorMetadata {

                    /** OperatorMetadata score */
                    score?: (number|null);

                    /** OperatorMetadata totalVotes */
                    totalVotes?: (number|null);

                    /** OperatorMetadata labelVotes */
                    labelVotes?: (number|null);

                    /** OperatorMetadata comments */
                    comments?: (string[]|null);
                }

                /** Represents an OperatorMetadata. */
                class OperatorMetadata implements IOperatorMetadata {

                    /**
                     * Constructs a new OperatorMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IOperatorMetadata);

                    /** OperatorMetadata score. */
                    public score: number;

                    /** OperatorMetadata totalVotes. */
                    public totalVotes: number;

                    /** OperatorMetadata labelVotes. */
                    public labelVotes: number;

                    /** OperatorMetadata comments. */
                    public comments: string[];

                    /**
                     * Creates a new OperatorMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperatorMetadata instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IOperatorMetadata): google.cloud.datalabeling.v1beta1.OperatorMetadata;

                    /**
                     * Encodes the specified OperatorMetadata message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.OperatorMetadata.verify|verify} messages.
                     * @param message OperatorMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IOperatorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperatorMetadata message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.OperatorMetadata.verify|verify} messages.
                     * @param message OperatorMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IOperatorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperatorMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperatorMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.OperatorMetadata;

                    /**
                     * Decodes an OperatorMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperatorMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.OperatorMetadata;

                    /**
                     * Verifies an OperatorMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperatorMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperatorMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.OperatorMetadata;

                    /**
                     * Creates a plain object from an OperatorMetadata message. Also converts values to other types if specified.
                     * @param message OperatorMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.OperatorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperatorMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImagePayload. */
                interface IImagePayload {

                    /** ImagePayload mimeType */
                    mimeType?: (string|null);

                    /** ImagePayload imageThumbnail */
                    imageThumbnail?: (Uint8Array|null);

                    /** ImagePayload imageUri */
                    imageUri?: (string|null);

                    /** ImagePayload signedUri */
                    signedUri?: (string|null);
                }

                /** Represents an ImagePayload. */
                class ImagePayload implements IImagePayload {

                    /**
                     * Constructs a new ImagePayload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImagePayload);

                    /** ImagePayload mimeType. */
                    public mimeType: string;

                    /** ImagePayload imageThumbnail. */
                    public imageThumbnail: Uint8Array;

                    /** ImagePayload imageUri. */
                    public imageUri: string;

                    /** ImagePayload signedUri. */
                    public signedUri: string;

                    /**
                     * Creates a new ImagePayload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImagePayload instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImagePayload): google.cloud.datalabeling.v1beta1.ImagePayload;

                    /**
                     * Encodes the specified ImagePayload message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImagePayload.verify|verify} messages.
                     * @param message ImagePayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImagePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImagePayload message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImagePayload.verify|verify} messages.
                     * @param message ImagePayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImagePayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImagePayload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImagePayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImagePayload;

                    /**
                     * Decodes an ImagePayload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImagePayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImagePayload;

                    /**
                     * Verifies an ImagePayload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImagePayload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImagePayload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImagePayload;

                    /**
                     * Creates a plain object from an ImagePayload message. Also converts values to other types if specified.
                     * @param message ImagePayload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImagePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImagePayload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TextPayload. */
                interface ITextPayload {

                    /** TextPayload textContent */
                    textContent?: (string|null);
                }

                /** Represents a TextPayload. */
                class TextPayload implements ITextPayload {

                    /**
                     * Constructs a new TextPayload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITextPayload);

                    /** TextPayload textContent. */
                    public textContent: string;

                    /**
                     * Creates a new TextPayload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextPayload instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITextPayload): google.cloud.datalabeling.v1beta1.TextPayload;

                    /**
                     * Encodes the specified TextPayload message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextPayload.verify|verify} messages.
                     * @param message TextPayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITextPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextPayload message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextPayload.verify|verify} messages.
                     * @param message TextPayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITextPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextPayload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TextPayload;

                    /**
                     * Decodes a TextPayload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TextPayload;

                    /**
                     * Verifies a TextPayload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextPayload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextPayload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TextPayload;

                    /**
                     * Creates a plain object from a TextPayload message. Also converts values to other types if specified.
                     * @param message TextPayload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TextPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextPayload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VideoThumbnail. */
                interface IVideoThumbnail {

                    /** VideoThumbnail thumbnail */
                    thumbnail?: (Uint8Array|null);

                    /** VideoThumbnail timeOffset */
                    timeOffset?: (google.protobuf.IDuration|null);
                }

                /** Represents a VideoThumbnail. */
                class VideoThumbnail implements IVideoThumbnail {

                    /**
                     * Constructs a new VideoThumbnail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVideoThumbnail);

                    /** VideoThumbnail thumbnail. */
                    public thumbnail: Uint8Array;

                    /** VideoThumbnail timeOffset. */
                    public timeOffset?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new VideoThumbnail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoThumbnail instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVideoThumbnail): google.cloud.datalabeling.v1beta1.VideoThumbnail;

                    /**
                     * Encodes the specified VideoThumbnail message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoThumbnail.verify|verify} messages.
                     * @param message VideoThumbnail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVideoThumbnail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoThumbnail message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoThumbnail.verify|verify} messages.
                     * @param message VideoThumbnail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVideoThumbnail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoThumbnail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoThumbnail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoThumbnail;

                    /**
                     * Decodes a VideoThumbnail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoThumbnail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoThumbnail;

                    /**
                     * Verifies a VideoThumbnail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoThumbnail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoThumbnail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoThumbnail;

                    /**
                     * Creates a plain object from a VideoThumbnail message. Also converts values to other types if specified.
                     * @param message VideoThumbnail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.VideoThumbnail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoThumbnail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VideoPayload. */
                interface IVideoPayload {

                    /** VideoPayload mimeType */
                    mimeType?: (string|null);

                    /** VideoPayload videoUri */
                    videoUri?: (string|null);

                    /** VideoPayload videoThumbnails */
                    videoThumbnails?: (google.cloud.datalabeling.v1beta1.IVideoThumbnail[]|null);

                    /** VideoPayload frameRate */
                    frameRate?: (number|null);

                    /** VideoPayload signedUri */
                    signedUri?: (string|null);
                }

                /** Represents a VideoPayload. */
                class VideoPayload implements IVideoPayload {

                    /**
                     * Constructs a new VideoPayload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVideoPayload);

                    /** VideoPayload mimeType. */
                    public mimeType: string;

                    /** VideoPayload videoUri. */
                    public videoUri: string;

                    /** VideoPayload videoThumbnails. */
                    public videoThumbnails: google.cloud.datalabeling.v1beta1.IVideoThumbnail[];

                    /** VideoPayload frameRate. */
                    public frameRate: number;

                    /** VideoPayload signedUri. */
                    public signedUri: string;

                    /**
                     * Creates a new VideoPayload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoPayload instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVideoPayload): google.cloud.datalabeling.v1beta1.VideoPayload;

                    /**
                     * Encodes the specified VideoPayload message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoPayload.verify|verify} messages.
                     * @param message VideoPayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVideoPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoPayload message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoPayload.verify|verify} messages.
                     * @param message VideoPayload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVideoPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoPayload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoPayload;

                    /**
                     * Decodes a VideoPayload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoPayload;

                    /**
                     * Verifies a VideoPayload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoPayload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoPayload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoPayload;

                    /**
                     * Creates a plain object from a VideoPayload message. Also converts values to other types if specified.
                     * @param message VideoPayload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.VideoPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoPayload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** StringAggregationType enum. */
                enum StringAggregationType {
                    STRING_AGGREGATION_TYPE_UNSPECIFIED = 0,
                    MAJORITY_VOTE = 1,
                    UNANIMOUS_VOTE = 2,
                    NO_AGGREGATION = 3
                }

                /** Properties of a HumanAnnotationConfig. */
                interface IHumanAnnotationConfig {

                    /** HumanAnnotationConfig instruction */
                    instruction?: (string|null);

                    /** HumanAnnotationConfig annotatedDatasetDisplayName */
                    annotatedDatasetDisplayName?: (string|null);

                    /** HumanAnnotationConfig annotatedDatasetDescription */
                    annotatedDatasetDescription?: (string|null);

                    /** HumanAnnotationConfig labelGroup */
                    labelGroup?: (string|null);

                    /** HumanAnnotationConfig languageCode */
                    languageCode?: (string|null);

                    /** HumanAnnotationConfig replicaCount */
                    replicaCount?: (number|null);

                    /** HumanAnnotationConfig questionDuration */
                    questionDuration?: (google.protobuf.IDuration|null);

                    /** HumanAnnotationConfig contributorEmails */
                    contributorEmails?: (string[]|null);

                    /** HumanAnnotationConfig userEmailAddress */
                    userEmailAddress?: (string|null);
                }

                /** Represents a HumanAnnotationConfig. */
                class HumanAnnotationConfig implements IHumanAnnotationConfig {

                    /**
                     * Constructs a new HumanAnnotationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig);

                    /** HumanAnnotationConfig instruction. */
                    public instruction: string;

                    /** HumanAnnotationConfig annotatedDatasetDisplayName. */
                    public annotatedDatasetDisplayName: string;

                    /** HumanAnnotationConfig annotatedDatasetDescription. */
                    public annotatedDatasetDescription: string;

                    /** HumanAnnotationConfig labelGroup. */
                    public labelGroup: string;

                    /** HumanAnnotationConfig languageCode. */
                    public languageCode: string;

                    /** HumanAnnotationConfig replicaCount. */
                    public replicaCount: number;

                    /** HumanAnnotationConfig questionDuration. */
                    public questionDuration?: (google.protobuf.IDuration|null);

                    /** HumanAnnotationConfig contributorEmails. */
                    public contributorEmails: string[];

                    /** HumanAnnotationConfig userEmailAddress. */
                    public userEmailAddress: string;

                    /**
                     * Creates a new HumanAnnotationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HumanAnnotationConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig): google.cloud.datalabeling.v1beta1.HumanAnnotationConfig;

                    /**
                     * Encodes the specified HumanAnnotationConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig.verify|verify} messages.
                     * @param message HumanAnnotationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HumanAnnotationConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig.verify|verify} messages.
                     * @param message HumanAnnotationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HumanAnnotationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HumanAnnotationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.HumanAnnotationConfig;

                    /**
                     * Decodes a HumanAnnotationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HumanAnnotationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.HumanAnnotationConfig;

                    /**
                     * Verifies a HumanAnnotationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HumanAnnotationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HumanAnnotationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.HumanAnnotationConfig;

                    /**
                     * Creates a plain object from a HumanAnnotationConfig message. Also converts values to other types if specified.
                     * @param message HumanAnnotationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.HumanAnnotationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HumanAnnotationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ImageClassificationConfig. */
                interface IImageClassificationConfig {

                    /** ImageClassificationConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** ImageClassificationConfig allowMultiLabel */
                    allowMultiLabel?: (boolean|null);

                    /** ImageClassificationConfig answerAggregationType */
                    answerAggregationType?: (google.cloud.datalabeling.v1beta1.StringAggregationType|null);
                }

                /** Represents an ImageClassificationConfig. */
                class ImageClassificationConfig implements IImageClassificationConfig {

                    /**
                     * Constructs a new ImageClassificationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IImageClassificationConfig);

                    /** ImageClassificationConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** ImageClassificationConfig allowMultiLabel. */
                    public allowMultiLabel: boolean;

                    /** ImageClassificationConfig answerAggregationType. */
                    public answerAggregationType: google.cloud.datalabeling.v1beta1.StringAggregationType;

                    /**
                     * Creates a new ImageClassificationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageClassificationConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IImageClassificationConfig): google.cloud.datalabeling.v1beta1.ImageClassificationConfig;

                    /**
                     * Encodes the specified ImageClassificationConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageClassificationConfig.verify|verify} messages.
                     * @param message ImageClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IImageClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageClassificationConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ImageClassificationConfig.verify|verify} messages.
                     * @param message ImageClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IImageClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageClassificationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ImageClassificationConfig;

                    /**
                     * Decodes an ImageClassificationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ImageClassificationConfig;

                    /**
                     * Verifies an ImageClassificationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageClassificationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageClassificationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ImageClassificationConfig;

                    /**
                     * Creates a plain object from an ImageClassificationConfig message. Also converts values to other types if specified.
                     * @param message ImageClassificationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ImageClassificationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageClassificationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BoundingPolyConfig. */
                interface IBoundingPolyConfig {

                    /** BoundingPolyConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** BoundingPolyConfig instructionMessage */
                    instructionMessage?: (string|null);
                }

                /** Represents a BoundingPolyConfig. */
                class BoundingPolyConfig implements IBoundingPolyConfig {

                    /**
                     * Constructs a new BoundingPolyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IBoundingPolyConfig);

                    /** BoundingPolyConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** BoundingPolyConfig instructionMessage. */
                    public instructionMessage: string;

                    /**
                     * Creates a new BoundingPolyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingPolyConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IBoundingPolyConfig): google.cloud.datalabeling.v1beta1.BoundingPolyConfig;

                    /**
                     * Encodes the specified BoundingPolyConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BoundingPolyConfig.verify|verify} messages.
                     * @param message BoundingPolyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IBoundingPolyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingPolyConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BoundingPolyConfig.verify|verify} messages.
                     * @param message BoundingPolyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IBoundingPolyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingPolyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingPolyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.BoundingPolyConfig;

                    /**
                     * Decodes a BoundingPolyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingPolyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.BoundingPolyConfig;

                    /**
                     * Verifies a BoundingPolyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingPolyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingPolyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.BoundingPolyConfig;

                    /**
                     * Creates a plain object from a BoundingPolyConfig message. Also converts values to other types if specified.
                     * @param message BoundingPolyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.BoundingPolyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingPolyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PolylineConfig. */
                interface IPolylineConfig {

                    /** PolylineConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** PolylineConfig instructionMessage */
                    instructionMessage?: (string|null);
                }

                /** Represents a PolylineConfig. */
                class PolylineConfig implements IPolylineConfig {

                    /**
                     * Constructs a new PolylineConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IPolylineConfig);

                    /** PolylineConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** PolylineConfig instructionMessage. */
                    public instructionMessage: string;

                    /**
                     * Creates a new PolylineConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PolylineConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IPolylineConfig): google.cloud.datalabeling.v1beta1.PolylineConfig;

                    /**
                     * Encodes the specified PolylineConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PolylineConfig.verify|verify} messages.
                     * @param message PolylineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IPolylineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PolylineConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PolylineConfig.verify|verify} messages.
                     * @param message PolylineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IPolylineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PolylineConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PolylineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.PolylineConfig;

                    /**
                     * Decodes a PolylineConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PolylineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.PolylineConfig;

                    /**
                     * Verifies a PolylineConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PolylineConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PolylineConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.PolylineConfig;

                    /**
                     * Creates a plain object from a PolylineConfig message. Also converts values to other types if specified.
                     * @param message PolylineConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.PolylineConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PolylineConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SegmentationConfig. */
                interface ISegmentationConfig {

                    /** SegmentationConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** SegmentationConfig instructionMessage */
                    instructionMessage?: (string|null);
                }

                /** Represents a SegmentationConfig. */
                class SegmentationConfig implements ISegmentationConfig {

                    /**
                     * Constructs a new SegmentationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISegmentationConfig);

                    /** SegmentationConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** SegmentationConfig instructionMessage. */
                    public instructionMessage: string;

                    /**
                     * Creates a new SegmentationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SegmentationConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISegmentationConfig): google.cloud.datalabeling.v1beta1.SegmentationConfig;

                    /**
                     * Encodes the specified SegmentationConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SegmentationConfig.verify|verify} messages.
                     * @param message SegmentationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISegmentationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SegmentationConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SegmentationConfig.verify|verify} messages.
                     * @param message SegmentationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISegmentationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SegmentationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SegmentationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SegmentationConfig;

                    /**
                     * Decodes a SegmentationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SegmentationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SegmentationConfig;

                    /**
                     * Verifies a SegmentationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SegmentationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SegmentationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SegmentationConfig;

                    /**
                     * Creates a plain object from a SegmentationConfig message. Also converts values to other types if specified.
                     * @param message SegmentationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SegmentationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SegmentationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VideoClassificationConfig. */
                interface IVideoClassificationConfig {

                    /** VideoClassificationConfig annotationSpecSetConfigs */
                    annotationSpecSetConfigs?: (google.cloud.datalabeling.v1beta1.VideoClassificationConfig.IAnnotationSpecSetConfig[]|null);

                    /** VideoClassificationConfig applyShotDetection */
                    applyShotDetection?: (boolean|null);
                }

                /** Represents a VideoClassificationConfig. */
                class VideoClassificationConfig implements IVideoClassificationConfig {

                    /**
                     * Constructs a new VideoClassificationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IVideoClassificationConfig);

                    /** VideoClassificationConfig annotationSpecSetConfigs. */
                    public annotationSpecSetConfigs: google.cloud.datalabeling.v1beta1.VideoClassificationConfig.IAnnotationSpecSetConfig[];

                    /** VideoClassificationConfig applyShotDetection. */
                    public applyShotDetection: boolean;

                    /**
                     * Creates a new VideoClassificationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VideoClassificationConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IVideoClassificationConfig): google.cloud.datalabeling.v1beta1.VideoClassificationConfig;

                    /**
                     * Encodes the specified VideoClassificationConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig.verify|verify} messages.
                     * @param message VideoClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IVideoClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VideoClassificationConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig.verify|verify} messages.
                     * @param message VideoClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IVideoClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VideoClassificationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VideoClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoClassificationConfig;

                    /**
                     * Decodes a VideoClassificationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VideoClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoClassificationConfig;

                    /**
                     * Verifies a VideoClassificationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VideoClassificationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VideoClassificationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoClassificationConfig;

                    /**
                     * Creates a plain object from a VideoClassificationConfig message. Also converts values to other types if specified.
                     * @param message VideoClassificationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.VideoClassificationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VideoClassificationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VideoClassificationConfig {

                    /** Properties of an AnnotationSpecSetConfig. */
                    interface IAnnotationSpecSetConfig {

                        /** AnnotationSpecSetConfig annotationSpecSet */
                        annotationSpecSet?: (string|null);

                        /** AnnotationSpecSetConfig allowMultiLabel */
                        allowMultiLabel?: (boolean|null);
                    }

                    /** Represents an AnnotationSpecSetConfig. */
                    class AnnotationSpecSetConfig implements IAnnotationSpecSetConfig {

                        /**
                         * Constructs a new AnnotationSpecSetConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datalabeling.v1beta1.VideoClassificationConfig.IAnnotationSpecSetConfig);

                        /** AnnotationSpecSetConfig annotationSpecSet. */
                        public annotationSpecSet: string;

                        /** AnnotationSpecSetConfig allowMultiLabel. */
                        public allowMultiLabel: boolean;

                        /**
                         * Creates a new AnnotationSpecSetConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnnotationSpecSetConfig instance
                         */
                        public static create(properties?: google.cloud.datalabeling.v1beta1.VideoClassificationConfig.IAnnotationSpecSetConfig): google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig;

                        /**
                         * Encodes the specified AnnotationSpecSetConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig.verify|verify} messages.
                         * @param message AnnotationSpecSetConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datalabeling.v1beta1.VideoClassificationConfig.IAnnotationSpecSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnnotationSpecSetConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig.verify|verify} messages.
                         * @param message AnnotationSpecSetConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.VideoClassificationConfig.IAnnotationSpecSetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnnotationSpecSetConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnnotationSpecSetConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig;

                        /**
                         * Decodes an AnnotationSpecSetConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnnotationSpecSetConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig;

                        /**
                         * Verifies an AnnotationSpecSetConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnnotationSpecSetConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnnotationSpecSetConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig;

                        /**
                         * Creates a plain object from an AnnotationSpecSetConfig message. Also converts values to other types if specified.
                         * @param message AnnotationSpecSetConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnnotationSpecSetConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an ObjectDetectionConfig. */
                interface IObjectDetectionConfig {

                    /** ObjectDetectionConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** ObjectDetectionConfig extractionFrameRate */
                    extractionFrameRate?: (number|null);
                }

                /** Represents an ObjectDetectionConfig. */
                class ObjectDetectionConfig implements IObjectDetectionConfig {

                    /**
                     * Constructs a new ObjectDetectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IObjectDetectionConfig);

                    /** ObjectDetectionConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** ObjectDetectionConfig extractionFrameRate. */
                    public extractionFrameRate: number;

                    /**
                     * Creates a new ObjectDetectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectDetectionConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IObjectDetectionConfig): google.cloud.datalabeling.v1beta1.ObjectDetectionConfig;

                    /**
                     * Encodes the specified ObjectDetectionConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectDetectionConfig.verify|verify} messages.
                     * @param message ObjectDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IObjectDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectDetectionConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectDetectionConfig.verify|verify} messages.
                     * @param message ObjectDetectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IObjectDetectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectDetectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ObjectDetectionConfig;

                    /**
                     * Decodes an ObjectDetectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectDetectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ObjectDetectionConfig;

                    /**
                     * Verifies an ObjectDetectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectDetectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectDetectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ObjectDetectionConfig;

                    /**
                     * Creates a plain object from an ObjectDetectionConfig message. Also converts values to other types if specified.
                     * @param message ObjectDetectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ObjectDetectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectDetectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ObjectTrackingConfig. */
                interface IObjectTrackingConfig {

                    /** ObjectTrackingConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);
                }

                /** Represents an ObjectTrackingConfig. */
                class ObjectTrackingConfig implements IObjectTrackingConfig {

                    /**
                     * Constructs a new ObjectTrackingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IObjectTrackingConfig);

                    /** ObjectTrackingConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /**
                     * Creates a new ObjectTrackingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectTrackingConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IObjectTrackingConfig): google.cloud.datalabeling.v1beta1.ObjectTrackingConfig;

                    /**
                     * Encodes the specified ObjectTrackingConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectTrackingConfig.verify|verify} messages.
                     * @param message ObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectTrackingConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectTrackingConfig.verify|verify} messages.
                     * @param message ObjectTrackingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IObjectTrackingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectTrackingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ObjectTrackingConfig;

                    /**
                     * Decodes an ObjectTrackingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectTrackingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ObjectTrackingConfig;

                    /**
                     * Verifies an ObjectTrackingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectTrackingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectTrackingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ObjectTrackingConfig;

                    /**
                     * Creates a plain object from an ObjectTrackingConfig message. Also converts values to other types if specified.
                     * @param message ObjectTrackingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ObjectTrackingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectTrackingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EventConfig. */
                interface IEventConfig {

                    /** EventConfig annotationSpecSets */
                    annotationSpecSets?: (string[]|null);
                }

                /** Represents an EventConfig. */
                class EventConfig implements IEventConfig {

                    /**
                     * Constructs a new EventConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEventConfig);

                    /** EventConfig annotationSpecSets. */
                    public annotationSpecSets: string[];

                    /**
                     * Creates a new EventConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEventConfig): google.cloud.datalabeling.v1beta1.EventConfig;

                    /**
                     * Encodes the specified EventConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EventConfig.verify|verify} messages.
                     * @param message EventConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEventConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EventConfig.verify|verify} messages.
                     * @param message EventConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEventConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.EventConfig;

                    /**
                     * Decodes an EventConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.EventConfig;

                    /**
                     * Verifies an EventConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.EventConfig;

                    /**
                     * Creates a plain object from an EventConfig message. Also converts values to other types if specified.
                     * @param message EventConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.EventConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TextClassificationConfig. */
                interface ITextClassificationConfig {

                    /** TextClassificationConfig allowMultiLabel */
                    allowMultiLabel?: (boolean|null);

                    /** TextClassificationConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** TextClassificationConfig sentimentConfig */
                    sentimentConfig?: (google.cloud.datalabeling.v1beta1.ISentimentConfig|null);
                }

                /** Represents a TextClassificationConfig. */
                class TextClassificationConfig implements ITextClassificationConfig {

                    /**
                     * Constructs a new TextClassificationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITextClassificationConfig);

                    /** TextClassificationConfig allowMultiLabel. */
                    public allowMultiLabel: boolean;

                    /** TextClassificationConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** TextClassificationConfig sentimentConfig. */
                    public sentimentConfig?: (google.cloud.datalabeling.v1beta1.ISentimentConfig|null);

                    /**
                     * Creates a new TextClassificationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextClassificationConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITextClassificationConfig): google.cloud.datalabeling.v1beta1.TextClassificationConfig;

                    /**
                     * Encodes the specified TextClassificationConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextClassificationConfig.verify|verify} messages.
                     * @param message TextClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITextClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextClassificationConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextClassificationConfig.verify|verify} messages.
                     * @param message TextClassificationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITextClassificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextClassificationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TextClassificationConfig;

                    /**
                     * Decodes a TextClassificationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextClassificationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TextClassificationConfig;

                    /**
                     * Verifies a TextClassificationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextClassificationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextClassificationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TextClassificationConfig;

                    /**
                     * Creates a plain object from a TextClassificationConfig message. Also converts values to other types if specified.
                     * @param message TextClassificationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TextClassificationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextClassificationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SentimentConfig. */
                interface ISentimentConfig {

                    /** SentimentConfig enableLabelSentimentSelection */
                    enableLabelSentimentSelection?: (boolean|null);
                }

                /** Represents a SentimentConfig. */
                class SentimentConfig implements ISentimentConfig {

                    /**
                     * Constructs a new SentimentConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ISentimentConfig);

                    /** SentimentConfig enableLabelSentimentSelection. */
                    public enableLabelSentimentSelection: boolean;

                    /**
                     * Creates a new SentimentConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SentimentConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ISentimentConfig): google.cloud.datalabeling.v1beta1.SentimentConfig;

                    /**
                     * Encodes the specified SentimentConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SentimentConfig.verify|verify} messages.
                     * @param message SentimentConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ISentimentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SentimentConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.SentimentConfig.verify|verify} messages.
                     * @param message SentimentConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ISentimentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SentimentConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SentimentConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.SentimentConfig;

                    /**
                     * Decodes a SentimentConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SentimentConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.SentimentConfig;

                    /**
                     * Verifies a SentimentConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SentimentConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SentimentConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.SentimentConfig;

                    /**
                     * Creates a plain object from a SentimentConfig message. Also converts values to other types if specified.
                     * @param message SentimentConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.SentimentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SentimentConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TextEntityExtractionConfig. */
                interface ITextEntityExtractionConfig {

                    /** TextEntityExtractionConfig annotationSpecSet */
                    annotationSpecSet?: (string|null);
                }

                /** Represents a TextEntityExtractionConfig. */
                class TextEntityExtractionConfig implements ITextEntityExtractionConfig {

                    /**
                     * Constructs a new TextEntityExtractionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig);

                    /** TextEntityExtractionConfig annotationSpecSet. */
                    public annotationSpecSet: string;

                    /**
                     * Creates a new TextEntityExtractionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextEntityExtractionConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig): google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig;

                    /**
                     * Encodes the specified TextEntityExtractionConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig.verify|verify} messages.
                     * @param message TextEntityExtractionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextEntityExtractionConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig.verify|verify} messages.
                     * @param message TextEntityExtractionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ITextEntityExtractionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextEntityExtractionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextEntityExtractionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig;

                    /**
                     * Decodes a TextEntityExtractionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextEntityExtractionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig;

                    /**
                     * Verifies a TextEntityExtractionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextEntityExtractionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextEntityExtractionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig;

                    /**
                     * Creates a plain object from a TextEntityExtractionConfig message. Also converts values to other types if specified.
                     * @param message TextEntityExtractionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextEntityExtractionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Evaluation. */
                interface IEvaluation {

                    /** Evaluation name */
                    name?: (string|null);

                    /** Evaluation config */
                    config?: (google.cloud.datalabeling.v1beta1.IEvaluationConfig|null);

                    /** Evaluation evaluationJobRunTime */
                    evaluationJobRunTime?: (google.protobuf.ITimestamp|null);

                    /** Evaluation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Evaluation evaluationMetrics */
                    evaluationMetrics?: (google.cloud.datalabeling.v1beta1.IEvaluationMetrics|null);

                    /** Evaluation annotationType */
                    annotationType?: (google.cloud.datalabeling.v1beta1.AnnotationType|null);

                    /** Evaluation evaluatedItemCount */
                    evaluatedItemCount?: (number|Long|null);
                }

                /** Represents an Evaluation. */
                class Evaluation implements IEvaluation {

                    /**
                     * Constructs a new Evaluation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEvaluation);

                    /** Evaluation name. */
                    public name: string;

                    /** Evaluation config. */
                    public config?: (google.cloud.datalabeling.v1beta1.IEvaluationConfig|null);

                    /** Evaluation evaluationJobRunTime. */
                    public evaluationJobRunTime?: (google.protobuf.ITimestamp|null);

                    /** Evaluation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Evaluation evaluationMetrics. */
                    public evaluationMetrics?: (google.cloud.datalabeling.v1beta1.IEvaluationMetrics|null);

                    /** Evaluation annotationType. */
                    public annotationType: google.cloud.datalabeling.v1beta1.AnnotationType;

                    /** Evaluation evaluatedItemCount. */
                    public evaluatedItemCount: (number|Long);

                    /**
                     * Creates a new Evaluation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Evaluation instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEvaluation): google.cloud.datalabeling.v1beta1.Evaluation;

                    /**
                     * Encodes the specified Evaluation message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Evaluation.verify|verify} messages.
                     * @param message Evaluation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEvaluation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Evaluation message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Evaluation.verify|verify} messages.
                     * @param message Evaluation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEvaluation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Evaluation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Evaluation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Evaluation;

                    /**
                     * Decodes an Evaluation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Evaluation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Evaluation;

                    /**
                     * Verifies an Evaluation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Evaluation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Evaluation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Evaluation;

                    /**
                     * Creates a plain object from an Evaluation message. Also converts values to other types if specified.
                     * @param message Evaluation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Evaluation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Evaluation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EvaluationConfig. */
                interface IEvaluationConfig {

                    /** EvaluationConfig boundingBoxEvaluationOptions */
                    boundingBoxEvaluationOptions?: (google.cloud.datalabeling.v1beta1.IBoundingBoxEvaluationOptions|null);
                }

                /** Represents an EvaluationConfig. */
                class EvaluationConfig implements IEvaluationConfig {

                    /**
                     * Constructs a new EvaluationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEvaluationConfig);

                    /** EvaluationConfig boundingBoxEvaluationOptions. */
                    public boundingBoxEvaluationOptions?: (google.cloud.datalabeling.v1beta1.IBoundingBoxEvaluationOptions|null);

                    /** EvaluationConfig verticalOption. */
                    public verticalOption?: "boundingBoxEvaluationOptions";

                    /**
                     * Creates a new EvaluationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvaluationConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEvaluationConfig): google.cloud.datalabeling.v1beta1.EvaluationConfig;

                    /**
                     * Encodes the specified EvaluationConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationConfig.verify|verify} messages.
                     * @param message EvaluationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEvaluationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvaluationConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationConfig.verify|verify} messages.
                     * @param message EvaluationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEvaluationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvaluationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvaluationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.EvaluationConfig;

                    /**
                     * Decodes an EvaluationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvaluationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.EvaluationConfig;

                    /**
                     * Verifies an EvaluationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvaluationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvaluationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.EvaluationConfig;

                    /**
                     * Creates a plain object from an EvaluationConfig message. Also converts values to other types if specified.
                     * @param message EvaluationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.EvaluationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvaluationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BoundingBoxEvaluationOptions. */
                interface IBoundingBoxEvaluationOptions {

                    /** BoundingBoxEvaluationOptions iouThreshold */
                    iouThreshold?: (number|null);
                }

                /** Represents a BoundingBoxEvaluationOptions. */
                class BoundingBoxEvaluationOptions implements IBoundingBoxEvaluationOptions {

                    /**
                     * Constructs a new BoundingBoxEvaluationOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IBoundingBoxEvaluationOptions);

                    /** BoundingBoxEvaluationOptions iouThreshold. */
                    public iouThreshold: number;

                    /**
                     * Creates a new BoundingBoxEvaluationOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingBoxEvaluationOptions instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IBoundingBoxEvaluationOptions): google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions;

                    /**
                     * Encodes the specified BoundingBoxEvaluationOptions message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions.verify|verify} messages.
                     * @param message BoundingBoxEvaluationOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IBoundingBoxEvaluationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingBoxEvaluationOptions message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions.verify|verify} messages.
                     * @param message BoundingBoxEvaluationOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IBoundingBoxEvaluationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingBoxEvaluationOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingBoxEvaluationOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions;

                    /**
                     * Decodes a BoundingBoxEvaluationOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingBoxEvaluationOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions;

                    /**
                     * Verifies a BoundingBoxEvaluationOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingBoxEvaluationOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingBoxEvaluationOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions;

                    /**
                     * Creates a plain object from a BoundingBoxEvaluationOptions message. Also converts values to other types if specified.
                     * @param message BoundingBoxEvaluationOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingBoxEvaluationOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EvaluationMetrics. */
                interface IEvaluationMetrics {

                    /** EvaluationMetrics classificationMetrics */
                    classificationMetrics?: (google.cloud.datalabeling.v1beta1.IClassificationMetrics|null);

                    /** EvaluationMetrics objectDetectionMetrics */
                    objectDetectionMetrics?: (google.cloud.datalabeling.v1beta1.IObjectDetectionMetrics|null);
                }

                /** Represents an EvaluationMetrics. */
                class EvaluationMetrics implements IEvaluationMetrics {

                    /**
                     * Constructs a new EvaluationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEvaluationMetrics);

                    /** EvaluationMetrics classificationMetrics. */
                    public classificationMetrics?: (google.cloud.datalabeling.v1beta1.IClassificationMetrics|null);

                    /** EvaluationMetrics objectDetectionMetrics. */
                    public objectDetectionMetrics?: (google.cloud.datalabeling.v1beta1.IObjectDetectionMetrics|null);

                    /** EvaluationMetrics metrics. */
                    public metrics?: ("classificationMetrics"|"objectDetectionMetrics");

                    /**
                     * Creates a new EvaluationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvaluationMetrics instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEvaluationMetrics): google.cloud.datalabeling.v1beta1.EvaluationMetrics;

                    /**
                     * Encodes the specified EvaluationMetrics message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationMetrics.verify|verify} messages.
                     * @param message EvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvaluationMetrics message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationMetrics.verify|verify} messages.
                     * @param message EvaluationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEvaluationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvaluationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.EvaluationMetrics;

                    /**
                     * Decodes an EvaluationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvaluationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.EvaluationMetrics;

                    /**
                     * Verifies an EvaluationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvaluationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvaluationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.EvaluationMetrics;

                    /**
                     * Creates a plain object from an EvaluationMetrics message. Also converts values to other types if specified.
                     * @param message EvaluationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.EvaluationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvaluationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassificationMetrics. */
                interface IClassificationMetrics {

                    /** ClassificationMetrics prCurve */
                    prCurve?: (google.cloud.datalabeling.v1beta1.IPrCurve|null);

                    /** ClassificationMetrics confusionMatrix */
                    confusionMatrix?: (google.cloud.datalabeling.v1beta1.IConfusionMatrix|null);
                }

                /** Represents a ClassificationMetrics. */
                class ClassificationMetrics implements IClassificationMetrics {

                    /**
                     * Constructs a new ClassificationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IClassificationMetrics);

                    /** ClassificationMetrics prCurve. */
                    public prCurve?: (google.cloud.datalabeling.v1beta1.IPrCurve|null);

                    /** ClassificationMetrics confusionMatrix. */
                    public confusionMatrix?: (google.cloud.datalabeling.v1beta1.IConfusionMatrix|null);

                    /**
                     * Creates a new ClassificationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassificationMetrics instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IClassificationMetrics): google.cloud.datalabeling.v1beta1.ClassificationMetrics;

                    /**
                     * Encodes the specified ClassificationMetrics message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ClassificationMetrics.verify|verify} messages.
                     * @param message ClassificationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IClassificationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassificationMetrics message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ClassificationMetrics.verify|verify} messages.
                     * @param message ClassificationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IClassificationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassificationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassificationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ClassificationMetrics;

                    /**
                     * Decodes a ClassificationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassificationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ClassificationMetrics;

                    /**
                     * Verifies a ClassificationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassificationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassificationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ClassificationMetrics;

                    /**
                     * Creates a plain object from a ClassificationMetrics message. Also converts values to other types if specified.
                     * @param message ClassificationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ClassificationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassificationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ObjectDetectionMetrics. */
                interface IObjectDetectionMetrics {

                    /** ObjectDetectionMetrics prCurve */
                    prCurve?: (google.cloud.datalabeling.v1beta1.IPrCurve|null);
                }

                /** Represents an ObjectDetectionMetrics. */
                class ObjectDetectionMetrics implements IObjectDetectionMetrics {

                    /**
                     * Constructs a new ObjectDetectionMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IObjectDetectionMetrics);

                    /** ObjectDetectionMetrics prCurve. */
                    public prCurve?: (google.cloud.datalabeling.v1beta1.IPrCurve|null);

                    /**
                     * Creates a new ObjectDetectionMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectDetectionMetrics instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IObjectDetectionMetrics): google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics;

                    /**
                     * Encodes the specified ObjectDetectionMetrics message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics.verify|verify} messages.
                     * @param message ObjectDetectionMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IObjectDetectionMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectDetectionMetrics message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics.verify|verify} messages.
                     * @param message ObjectDetectionMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IObjectDetectionMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectDetectionMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectDetectionMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics;

                    /**
                     * Decodes an ObjectDetectionMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectDetectionMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics;

                    /**
                     * Verifies an ObjectDetectionMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectDetectionMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectDetectionMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics;

                    /**
                     * Creates a plain object from an ObjectDetectionMetrics message. Also converts values to other types if specified.
                     * @param message ObjectDetectionMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectDetectionMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PrCurve. */
                interface IPrCurve {

                    /** PrCurve annotationSpec */
                    annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** PrCurve areaUnderCurve */
                    areaUnderCurve?: (number|null);

                    /** PrCurve confidenceMetricsEntries */
                    confidenceMetricsEntries?: (google.cloud.datalabeling.v1beta1.PrCurve.IConfidenceMetricsEntry[]|null);

                    /** PrCurve meanAveragePrecision */
                    meanAveragePrecision?: (number|null);
                }

                /** Represents a PrCurve. */
                class PrCurve implements IPrCurve {

                    /**
                     * Constructs a new PrCurve.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IPrCurve);

                    /** PrCurve annotationSpec. */
                    public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                    /** PrCurve areaUnderCurve. */
                    public areaUnderCurve: number;

                    /** PrCurve confidenceMetricsEntries. */
                    public confidenceMetricsEntries: google.cloud.datalabeling.v1beta1.PrCurve.IConfidenceMetricsEntry[];

                    /** PrCurve meanAveragePrecision. */
                    public meanAveragePrecision: number;

                    /**
                     * Creates a new PrCurve instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrCurve instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IPrCurve): google.cloud.datalabeling.v1beta1.PrCurve;

                    /**
                     * Encodes the specified PrCurve message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PrCurve.verify|verify} messages.
                     * @param message PrCurve message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IPrCurve, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrCurve message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PrCurve.verify|verify} messages.
                     * @param message PrCurve message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IPrCurve, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrCurve message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrCurve
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.PrCurve;

                    /**
                     * Decodes a PrCurve message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrCurve
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.PrCurve;

                    /**
                     * Verifies a PrCurve message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrCurve message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrCurve
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.PrCurve;

                    /**
                     * Creates a plain object from a PrCurve message. Also converts values to other types if specified.
                     * @param message PrCurve
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.PrCurve, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrCurve to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PrCurve {

                    /** Properties of a ConfidenceMetricsEntry. */
                    interface IConfidenceMetricsEntry {

                        /** ConfidenceMetricsEntry confidenceThreshold */
                        confidenceThreshold?: (number|null);

                        /** ConfidenceMetricsEntry recall */
                        recall?: (number|null);

                        /** ConfidenceMetricsEntry precision */
                        precision?: (number|null);

                        /** ConfidenceMetricsEntry f1Score */
                        f1Score?: (number|null);

                        /** ConfidenceMetricsEntry recallAt1 */
                        recallAt1?: (number|null);

                        /** ConfidenceMetricsEntry precisionAt1 */
                        precisionAt1?: (number|null);

                        /** ConfidenceMetricsEntry f1ScoreAt1 */
                        f1ScoreAt1?: (number|null);

                        /** ConfidenceMetricsEntry recallAt5 */
                        recallAt5?: (number|null);

                        /** ConfidenceMetricsEntry precisionAt5 */
                        precisionAt5?: (number|null);

                        /** ConfidenceMetricsEntry f1ScoreAt5 */
                        f1ScoreAt5?: (number|null);
                    }

                    /** Represents a ConfidenceMetricsEntry. */
                    class ConfidenceMetricsEntry implements IConfidenceMetricsEntry {

                        /**
                         * Constructs a new ConfidenceMetricsEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datalabeling.v1beta1.PrCurve.IConfidenceMetricsEntry);

                        /** ConfidenceMetricsEntry confidenceThreshold. */
                        public confidenceThreshold: number;

                        /** ConfidenceMetricsEntry recall. */
                        public recall: number;

                        /** ConfidenceMetricsEntry precision. */
                        public precision: number;

                        /** ConfidenceMetricsEntry f1Score. */
                        public f1Score: number;

                        /** ConfidenceMetricsEntry recallAt1. */
                        public recallAt1: number;

                        /** ConfidenceMetricsEntry precisionAt1. */
                        public precisionAt1: number;

                        /** ConfidenceMetricsEntry f1ScoreAt1. */
                        public f1ScoreAt1: number;

                        /** ConfidenceMetricsEntry recallAt5. */
                        public recallAt5: number;

                        /** ConfidenceMetricsEntry precisionAt5. */
                        public precisionAt5: number;

                        /** ConfidenceMetricsEntry f1ScoreAt5. */
                        public f1ScoreAt5: number;

                        /**
                         * Creates a new ConfidenceMetricsEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfidenceMetricsEntry instance
                         */
                        public static create(properties?: google.cloud.datalabeling.v1beta1.PrCurve.IConfidenceMetricsEntry): google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datalabeling.v1beta1.PrCurve.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfidenceMetricsEntry message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry.verify|verify} messages.
                         * @param message ConfidenceMetricsEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.PrCurve.IConfidenceMetricsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry;

                        /**
                         * Decodes a ConfidenceMetricsEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfidenceMetricsEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry;

                        /**
                         * Verifies a ConfidenceMetricsEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfidenceMetricsEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfidenceMetricsEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry;

                        /**
                         * Creates a plain object from a ConfidenceMetricsEntry message. Also converts values to other types if specified.
                         * @param message ConfidenceMetricsEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfidenceMetricsEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ConfusionMatrix. */
                interface IConfusionMatrix {

                    /** ConfusionMatrix row */
                    row?: (google.cloud.datalabeling.v1beta1.ConfusionMatrix.IRow[]|null);
                }

                /** Represents a ConfusionMatrix. */
                class ConfusionMatrix implements IConfusionMatrix {

                    /**
                     * Constructs a new ConfusionMatrix.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IConfusionMatrix);

                    /** ConfusionMatrix row. */
                    public row: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IRow[];

                    /**
                     * Creates a new ConfusionMatrix instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfusionMatrix instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IConfusionMatrix): google.cloud.datalabeling.v1beta1.ConfusionMatrix;

                    /**
                     * Encodes the specified ConfusionMatrix message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ConfusionMatrix.verify|verify} messages.
                     * @param message ConfusionMatrix message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IConfusionMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfusionMatrix message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ConfusionMatrix.verify|verify} messages.
                     * @param message ConfusionMatrix message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IConfusionMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfusionMatrix message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfusionMatrix
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ConfusionMatrix;

                    /**
                     * Decodes a ConfusionMatrix message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfusionMatrix
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ConfusionMatrix;

                    /**
                     * Verifies a ConfusionMatrix message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfusionMatrix message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfusionMatrix
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ConfusionMatrix;

                    /**
                     * Creates a plain object from a ConfusionMatrix message. Also converts values to other types if specified.
                     * @param message ConfusionMatrix
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfusionMatrix to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ConfusionMatrix {

                    /** Properties of a ConfusionMatrixEntry. */
                    interface IConfusionMatrixEntry {

                        /** ConfusionMatrixEntry annotationSpec */
                        annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                        /** ConfusionMatrixEntry itemCount */
                        itemCount?: (number|null);
                    }

                    /** Represents a ConfusionMatrixEntry. */
                    class ConfusionMatrixEntry implements IConfusionMatrixEntry {

                        /**
                         * Constructs a new ConfusionMatrixEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IConfusionMatrixEntry);

                        /** ConfusionMatrixEntry annotationSpec. */
                        public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                        /** ConfusionMatrixEntry itemCount. */
                        public itemCount: number;

                        /**
                         * Creates a new ConfusionMatrixEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConfusionMatrixEntry instance
                         */
                        public static create(properties?: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IConfusionMatrixEntry): google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry;

                        /**
                         * Encodes the specified ConfusionMatrixEntry message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry.verify|verify} messages.
                         * @param message ConfusionMatrixEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IConfusionMatrixEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConfusionMatrixEntry message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry.verify|verify} messages.
                         * @param message ConfusionMatrixEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IConfusionMatrixEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConfusionMatrixEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConfusionMatrixEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry;

                        /**
                         * Decodes a ConfusionMatrixEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConfusionMatrixEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry;

                        /**
                         * Verifies a ConfusionMatrixEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConfusionMatrixEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConfusionMatrixEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry;

                        /**
                         * Creates a plain object from a ConfusionMatrixEntry message. Also converts values to other types if specified.
                         * @param message ConfusionMatrixEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConfusionMatrixEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Row. */
                    interface IRow {

                        /** Row annotationSpec */
                        annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                        /** Row entries */
                        entries?: (google.cloud.datalabeling.v1beta1.ConfusionMatrix.IConfusionMatrixEntry[]|null);
                    }

                    /** Represents a Row. */
                    class Row implements IRow {

                        /**
                         * Constructs a new Row.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IRow);

                        /** Row annotationSpec. */
                        public annotationSpec?: (google.cloud.datalabeling.v1beta1.IAnnotationSpec|null);

                        /** Row entries. */
                        public entries: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IConfusionMatrixEntry[];

                        /**
                         * Creates a new Row instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Row instance
                         */
                        public static create(properties?: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IRow): google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row;

                        /**
                         * Encodes the specified Row message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row.verify|verify} messages.
                         * @param message Row message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Row message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row.verify|verify} messages.
                         * @param message Row message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Row message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Row
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row;

                        /**
                         * Decodes a Row message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Row
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row;

                        /**
                         * Verifies a Row message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Row message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Row
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row;

                        /**
                         * Creates a plain object from a Row message. Also converts values to other types if specified.
                         * @param message Row
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Row to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an EvaluationJob. */
                interface IEvaluationJob {

                    /** EvaluationJob name */
                    name?: (string|null);

                    /** EvaluationJob description */
                    description?: (string|null);

                    /** EvaluationJob state */
                    state?: (google.cloud.datalabeling.v1beta1.EvaluationJob.State|null);

                    /** EvaluationJob schedule */
                    schedule?: (string|null);

                    /** EvaluationJob modelVersion */
                    modelVersion?: (string|null);

                    /** EvaluationJob evaluationJobConfig */
                    evaluationJobConfig?: (google.cloud.datalabeling.v1beta1.IEvaluationJobConfig|null);

                    /** EvaluationJob annotationSpecSet */
                    annotationSpecSet?: (string|null);

                    /** EvaluationJob labelMissingGroundTruth */
                    labelMissingGroundTruth?: (boolean|null);

                    /** EvaluationJob attempts */
                    attempts?: (google.cloud.datalabeling.v1beta1.IAttempt[]|null);

                    /** EvaluationJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an EvaluationJob. */
                class EvaluationJob implements IEvaluationJob {

                    /**
                     * Constructs a new EvaluationJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEvaluationJob);

                    /** EvaluationJob name. */
                    public name: string;

                    /** EvaluationJob description. */
                    public description: string;

                    /** EvaluationJob state. */
                    public state: google.cloud.datalabeling.v1beta1.EvaluationJob.State;

                    /** EvaluationJob schedule. */
                    public schedule: string;

                    /** EvaluationJob modelVersion. */
                    public modelVersion: string;

                    /** EvaluationJob evaluationJobConfig. */
                    public evaluationJobConfig?: (google.cloud.datalabeling.v1beta1.IEvaluationJobConfig|null);

                    /** EvaluationJob annotationSpecSet. */
                    public annotationSpecSet: string;

                    /** EvaluationJob labelMissingGroundTruth. */
                    public labelMissingGroundTruth: boolean;

                    /** EvaluationJob attempts. */
                    public attempts: google.cloud.datalabeling.v1beta1.IAttempt[];

                    /** EvaluationJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new EvaluationJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvaluationJob instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEvaluationJob): google.cloud.datalabeling.v1beta1.EvaluationJob;

                    /**
                     * Encodes the specified EvaluationJob message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationJob.verify|verify} messages.
                     * @param message EvaluationJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEvaluationJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvaluationJob message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationJob.verify|verify} messages.
                     * @param message EvaluationJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEvaluationJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvaluationJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvaluationJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.EvaluationJob;

                    /**
                     * Decodes an EvaluationJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvaluationJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.EvaluationJob;

                    /**
                     * Verifies an EvaluationJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvaluationJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvaluationJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.EvaluationJob;

                    /**
                     * Creates a plain object from an EvaluationJob message. Also converts values to other types if specified.
                     * @param message EvaluationJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.EvaluationJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvaluationJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EvaluationJob {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        SCHEDULED = 1,
                        RUNNING = 2,
                        PAUSED = 3,
                        STOPPED = 4
                    }
                }

                /** Properties of an EvaluationJobConfig. */
                interface IEvaluationJobConfig {

                    /** EvaluationJobConfig imageClassificationConfig */
                    imageClassificationConfig?: (google.cloud.datalabeling.v1beta1.IImageClassificationConfig|null);

                    /** EvaluationJobConfig boundingPolyConfig */
                    boundingPolyConfig?: (google.cloud.datalabeling.v1beta1.IBoundingPolyConfig|null);

                    /** EvaluationJobConfig textClassificationConfig */
                    textClassificationConfig?: (google.cloud.datalabeling.v1beta1.ITextClassificationConfig|null);

                    /** EvaluationJobConfig inputConfig */
                    inputConfig?: (google.cloud.datalabeling.v1beta1.IInputConfig|null);

                    /** EvaluationJobConfig evaluationConfig */
                    evaluationConfig?: (google.cloud.datalabeling.v1beta1.IEvaluationConfig|null);

                    /** EvaluationJobConfig humanAnnotationConfig */
                    humanAnnotationConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** EvaluationJobConfig bigqueryImportKeys */
                    bigqueryImportKeys?: ({ [k: string]: string }|null);

                    /** EvaluationJobConfig exampleCount */
                    exampleCount?: (number|null);

                    /** EvaluationJobConfig exampleSamplePercentage */
                    exampleSamplePercentage?: (number|null);

                    /** EvaluationJobConfig evaluationJobAlertConfig */
                    evaluationJobAlertConfig?: (google.cloud.datalabeling.v1beta1.IEvaluationJobAlertConfig|null);
                }

                /** Represents an EvaluationJobConfig. */
                class EvaluationJobConfig implements IEvaluationJobConfig {

                    /**
                     * Constructs a new EvaluationJobConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEvaluationJobConfig);

                    /** EvaluationJobConfig imageClassificationConfig. */
                    public imageClassificationConfig?: (google.cloud.datalabeling.v1beta1.IImageClassificationConfig|null);

                    /** EvaluationJobConfig boundingPolyConfig. */
                    public boundingPolyConfig?: (google.cloud.datalabeling.v1beta1.IBoundingPolyConfig|null);

                    /** EvaluationJobConfig textClassificationConfig. */
                    public textClassificationConfig?: (google.cloud.datalabeling.v1beta1.ITextClassificationConfig|null);

                    /** EvaluationJobConfig inputConfig. */
                    public inputConfig?: (google.cloud.datalabeling.v1beta1.IInputConfig|null);

                    /** EvaluationJobConfig evaluationConfig. */
                    public evaluationConfig?: (google.cloud.datalabeling.v1beta1.IEvaluationConfig|null);

                    /** EvaluationJobConfig humanAnnotationConfig. */
                    public humanAnnotationConfig?: (google.cloud.datalabeling.v1beta1.IHumanAnnotationConfig|null);

                    /** EvaluationJobConfig bigqueryImportKeys. */
                    public bigqueryImportKeys: { [k: string]: string };

                    /** EvaluationJobConfig exampleCount. */
                    public exampleCount: number;

                    /** EvaluationJobConfig exampleSamplePercentage. */
                    public exampleSamplePercentage: number;

                    /** EvaluationJobConfig evaluationJobAlertConfig. */
                    public evaluationJobAlertConfig?: (google.cloud.datalabeling.v1beta1.IEvaluationJobAlertConfig|null);

                    /** EvaluationJobConfig humanAnnotationRequestConfig. */
                    public humanAnnotationRequestConfig?: ("imageClassificationConfig"|"boundingPolyConfig"|"textClassificationConfig");

                    /**
                     * Creates a new EvaluationJobConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvaluationJobConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEvaluationJobConfig): google.cloud.datalabeling.v1beta1.EvaluationJobConfig;

                    /**
                     * Encodes the specified EvaluationJobConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationJobConfig.verify|verify} messages.
                     * @param message EvaluationJobConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEvaluationJobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvaluationJobConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationJobConfig.verify|verify} messages.
                     * @param message EvaluationJobConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEvaluationJobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvaluationJobConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvaluationJobConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.EvaluationJobConfig;

                    /**
                     * Decodes an EvaluationJobConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvaluationJobConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.EvaluationJobConfig;

                    /**
                     * Verifies an EvaluationJobConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvaluationJobConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvaluationJobConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.EvaluationJobConfig;

                    /**
                     * Creates a plain object from an EvaluationJobConfig message. Also converts values to other types if specified.
                     * @param message EvaluationJobConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.EvaluationJobConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvaluationJobConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EvaluationJobAlertConfig. */
                interface IEvaluationJobAlertConfig {

                    /** EvaluationJobAlertConfig email */
                    email?: (string|null);

                    /** EvaluationJobAlertConfig minAcceptableMeanAveragePrecision */
                    minAcceptableMeanAveragePrecision?: (number|null);
                }

                /** Represents an EvaluationJobAlertConfig. */
                class EvaluationJobAlertConfig implements IEvaluationJobAlertConfig {

                    /**
                     * Constructs a new EvaluationJobAlertConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IEvaluationJobAlertConfig);

                    /** EvaluationJobAlertConfig email. */
                    public email: string;

                    /** EvaluationJobAlertConfig minAcceptableMeanAveragePrecision. */
                    public minAcceptableMeanAveragePrecision: number;

                    /**
                     * Creates a new EvaluationJobAlertConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvaluationJobAlertConfig instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IEvaluationJobAlertConfig): google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig;

                    /**
                     * Encodes the specified EvaluationJobAlertConfig message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig.verify|verify} messages.
                     * @param message EvaluationJobAlertConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IEvaluationJobAlertConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvaluationJobAlertConfig message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig.verify|verify} messages.
                     * @param message EvaluationJobAlertConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IEvaluationJobAlertConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvaluationJobAlertConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvaluationJobAlertConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig;

                    /**
                     * Decodes an EvaluationJobAlertConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvaluationJobAlertConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig;

                    /**
                     * Verifies an EvaluationJobAlertConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvaluationJobAlertConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvaluationJobAlertConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig;

                    /**
                     * Creates a plain object from an EvaluationJobAlertConfig message. Also converts values to other types if specified.
                     * @param message EvaluationJobAlertConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvaluationJobAlertConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Attempt. */
                interface IAttempt {

                    /** Attempt attemptTime */
                    attemptTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt partialFailures */
                    partialFailures?: (google.rpc.IStatus[]|null);
                }

                /** Represents an Attempt. */
                class Attempt implements IAttempt {

                    /**
                     * Constructs a new Attempt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IAttempt);

                    /** Attempt attemptTime. */
                    public attemptTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt partialFailures. */
                    public partialFailures: google.rpc.IStatus[];

                    /**
                     * Creates a new Attempt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attempt instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IAttempt): google.cloud.datalabeling.v1beta1.Attempt;

                    /**
                     * Encodes the specified Attempt message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attempt message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Attempt;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Attempt;

                    /**
                     * Verifies an Attempt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attempt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attempt
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Attempt;

                    /**
                     * Creates a plain object from an Attempt message. Also converts values to other types if specified.
                     * @param message Attempt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Attempt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attempt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Instruction. */
                interface IInstruction {

                    /** Instruction name */
                    name?: (string|null);

                    /** Instruction displayName */
                    displayName?: (string|null);

                    /** Instruction description */
                    description?: (string|null);

                    /** Instruction createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instruction updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instruction dataType */
                    dataType?: (google.cloud.datalabeling.v1beta1.DataType|null);

                    /** Instruction csvInstruction */
                    csvInstruction?: (google.cloud.datalabeling.v1beta1.ICsvInstruction|null);

                    /** Instruction pdfInstruction */
                    pdfInstruction?: (google.cloud.datalabeling.v1beta1.IPdfInstruction|null);

                    /** Instruction blockingResources */
                    blockingResources?: (string[]|null);
                }

                /** Represents an Instruction. */
                class Instruction implements IInstruction {

                    /**
                     * Constructs a new Instruction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IInstruction);

                    /** Instruction name. */
                    public name: string;

                    /** Instruction displayName. */
                    public displayName: string;

                    /** Instruction description. */
                    public description: string;

                    /** Instruction createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instruction updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instruction dataType. */
                    public dataType: google.cloud.datalabeling.v1beta1.DataType;

                    /** Instruction csvInstruction. */
                    public csvInstruction?: (google.cloud.datalabeling.v1beta1.ICsvInstruction|null);

                    /** Instruction pdfInstruction. */
                    public pdfInstruction?: (google.cloud.datalabeling.v1beta1.IPdfInstruction|null);

                    /** Instruction blockingResources. */
                    public blockingResources: string[];

                    /**
                     * Creates a new Instruction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instruction instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IInstruction): google.cloud.datalabeling.v1beta1.Instruction;

                    /**
                     * Encodes the specified Instruction message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Instruction.verify|verify} messages.
                     * @param message Instruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instruction message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.Instruction.verify|verify} messages.
                     * @param message Instruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instruction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.Instruction;

                    /**
                     * Decodes an Instruction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.Instruction;

                    /**
                     * Verifies an Instruction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instruction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.Instruction;

                    /**
                     * Creates a plain object from an Instruction message. Also converts values to other types if specified.
                     * @param message Instruction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.Instruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instruction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CsvInstruction. */
                interface ICsvInstruction {

                    /** CsvInstruction gcsFileUri */
                    gcsFileUri?: (string|null);
                }

                /** Represents a CsvInstruction. */
                class CsvInstruction implements ICsvInstruction {

                    /**
                     * Constructs a new CsvInstruction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.ICsvInstruction);

                    /** CsvInstruction gcsFileUri. */
                    public gcsFileUri: string;

                    /**
                     * Creates a new CsvInstruction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CsvInstruction instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.ICsvInstruction): google.cloud.datalabeling.v1beta1.CsvInstruction;

                    /**
                     * Encodes the specified CsvInstruction message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CsvInstruction.verify|verify} messages.
                     * @param message CsvInstruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.ICsvInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CsvInstruction message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.CsvInstruction.verify|verify} messages.
                     * @param message CsvInstruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.ICsvInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CsvInstruction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CsvInstruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.CsvInstruction;

                    /**
                     * Decodes a CsvInstruction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CsvInstruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.CsvInstruction;

                    /**
                     * Verifies a CsvInstruction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CsvInstruction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CsvInstruction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.CsvInstruction;

                    /**
                     * Creates a plain object from a CsvInstruction message. Also converts values to other types if specified.
                     * @param message CsvInstruction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.CsvInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CsvInstruction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PdfInstruction. */
                interface IPdfInstruction {

                    /** PdfInstruction gcsFileUri */
                    gcsFileUri?: (string|null);
                }

                /** Represents a PdfInstruction. */
                class PdfInstruction implements IPdfInstruction {

                    /**
                     * Constructs a new PdfInstruction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datalabeling.v1beta1.IPdfInstruction);

                    /** PdfInstruction gcsFileUri. */
                    public gcsFileUri: string;

                    /**
                     * Creates a new PdfInstruction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PdfInstruction instance
                     */
                    public static create(properties?: google.cloud.datalabeling.v1beta1.IPdfInstruction): google.cloud.datalabeling.v1beta1.PdfInstruction;

                    /**
                     * Encodes the specified PdfInstruction message. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PdfInstruction.verify|verify} messages.
                     * @param message PdfInstruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datalabeling.v1beta1.IPdfInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PdfInstruction message, length delimited. Does not implicitly {@link google.cloud.datalabeling.v1beta1.PdfInstruction.verify|verify} messages.
                     * @param message PdfInstruction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datalabeling.v1beta1.IPdfInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PdfInstruction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PdfInstruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datalabeling.v1beta1.PdfInstruction;

                    /**
                     * Decodes a PdfInstruction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PdfInstruction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datalabeling.v1beta1.PdfInstruction;

                    /**
                     * Verifies a PdfInstruction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PdfInstruction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PdfInstruction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datalabeling.v1beta1.PdfInstruction;

                    /**
                     * Creates a plain object from a PdfInstruction message. Also converts values to other types if specified.
                     * @param message PdfInstruction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datalabeling.v1beta1.PdfInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PdfInstruction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: google.api.ResourceDescriptor.History;

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
