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
 * Request message for CreateDataset.
 *
 * @property {string} parent
 *   Required. Dataset resource parent, format:
 *   projects/{project_id}
 *
 * @property {Object} dataset
 *   Required. The dataset to be created.
 *
 *   This object should have the same structure as [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}
 *
 * @typedef CreateDatasetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.CreateDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const CreateDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetDataSet.
 *
 * @property {string} name
 *   Required. Dataset resource name, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @typedef GetDatasetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListDataset.
 *
 * @property {string} parent
 *   Required. Dataset resource parent, format:
 *   projects/{project_id}
 *
 * @property {string} filter
 *   Optional. Filter on dataset is not supported at this moment.
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by
 *   ListDatasetsResponse.next_page_token of the previous
 *   [DataLabelingService.ListDatasets] call.
 *   Returns the first page if empty.
 *
 * @typedef ListDatasetsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListDatasetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListDatasetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of listing datasets within a project.
 *
 * @property {Object[]} datasets
 *   The list of datasets to return.
 *
 *   This object should have the same structure as [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListDatasetsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListDatasetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListDatasetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteDataset.
 *
 * @property {string} name
 *   Required. Dataset resource name, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @typedef DeleteDatasetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.DeleteDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const DeleteDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ImportData API.
 *
 * @property {string} name
 *   Required. Dataset resource name, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {Object} inputConfig
 *   Required. Specify the input source of the data.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.datalabeling.v1beta1.InputConfig}
 *
 * @property {string} userEmailAddress
 *   Email of the user who started the import task and should be notified by
 *   email. If empty no notification will be sent.
 *
 * @typedef ImportDataRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImportDataRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ImportDataRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ExportData API.
 *
 * @property {string} name
 *   Required. Dataset resource name, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {string} annotatedDataset
 *   Required. Annotated dataset resource name. DataItem in
 *   Dataset and their annotations in specified annotated dataset will be
 *   exported. It's in format of
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
 *   {annotated_dataset_id}
 *
 * @property {string} filter
 *   Optional. Filter is not supported at this moment.
 *
 * @property {Object} outputConfig
 *   Required. Specify the output destination.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.datalabeling.v1beta1.OutputConfig}
 *
 * @property {string} userEmailAddress
 *   Email of the user who started the export task and should be notified by
 *   email. If empty no notification will be sent.
 *
 * @typedef ExportDataRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ExportDataRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ExportDataRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetDataItem.
 *
 * @property {string} name
 *   Required. The name of the data item to get, format:
 *   projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
 *
 * @typedef GetDataItemRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetDataItemRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetDataItemRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListDataItems.
 *
 * @property {string} parent
 *   Required. Name of the dataset to list data items, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {string} filter
 *   Optional. Filter is not supported at this moment.
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by
 *   ListDataItemsResponse.next_page_token of the previous
 *   [DataLabelingService.ListDataItems] call.
 *   Return first page if empty.
 *
 * @typedef ListDataItemsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListDataItemsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListDataItemsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of listing data items in a dataset.
 *
 * @property {Object[]} dataItems
 *   The list of data items to return.
 *
 *   This object should have the same structure as [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListDataItemsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListDataItemsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListDataItemsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetAnnotatedDataset.
 *
 * @property {string} name
 *   Required. Name of the annotated dataset to get, format:
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
 *   {annotated_dataset_id}
 *
 * @typedef GetAnnotatedDatasetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetAnnotatedDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetAnnotatedDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListAnnotatedDatasets.
 *
 * @property {string} parent
 *   Required. Name of the dataset to list annotated datasets, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {string} filter
 *   Optional. Filter is not supported at this moment.
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by
 *   ListAnnotatedDatasetsResponse.next_page_token of the previous
 *   [DataLabelingService.ListAnnotatedDatasets] call.
 *   Return first page if empty.
 *
 * @typedef ListAnnotatedDatasetsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListAnnotatedDatasetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of listing annotated datasets for a dataset.
 *
 * @property {Object[]} annotatedDatasets
 *   The list of annotated datasets to return.
 *
 *   This object should have the same structure as [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListAnnotatedDatasetsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListAnnotatedDatasetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteAnnotatedDataset.
 *
 * @property {string} name
 *   Required. Name of the annotated dataset to delete, format:
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
 *   {annotated_dataset_id}
 *
 * @typedef DeleteAnnotatedDatasetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.DeleteAnnotatedDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const DeleteAnnotatedDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for starting an image labeling task.
 *
 * @property {Object} imageClassificationConfig
 *   Configuration for image classification task.
 *   One of image_classification_config, bounding_poly_config,
 *   polyline_config and segmentation_config are required.
 *
 *   This object should have the same structure as [ImageClassificationConfig]{@link google.cloud.datalabeling.v1beta1.ImageClassificationConfig}
 *
 * @property {Object} boundingPolyConfig
 *   Configuration for bounding box and bounding poly task.
 *   One of image_classification_config, bounding_poly_config,
 *   polyline_config and segmentation_config are required.
 *
 *   This object should have the same structure as [BoundingPolyConfig]{@link google.cloud.datalabeling.v1beta1.BoundingPolyConfig}
 *
 * @property {Object} polylineConfig
 *   Configuration for polyline task.
 *   One of image_classification_config, bounding_poly_config,
 *   polyline_config and segmentation_config are required.
 *
 *   This object should have the same structure as [PolylineConfig]{@link google.cloud.datalabeling.v1beta1.PolylineConfig}
 *
 * @property {Object} segmentationConfig
 *   Configuration for segmentation task.
 *   One of image_classification_config, bounding_poly_config,
 *   polyline_config and segmentation_config are required.
 *
 *   This object should have the same structure as [SegmentationConfig]{@link google.cloud.datalabeling.v1beta1.SegmentationConfig}
 *
 * @property {string} parent
 *   Required. Name of the dataset to request labeling task, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {Object} basicConfig
 *   Required. Basic human annotation config.
 *
 *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 *
 * @property {number} feature
 *   Required. The type of image labeling task.
 *
 *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
 *
 * @typedef LabelImageRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.LabelImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const LabelImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Image labeling task feature.
   *
   * @enum {number}
   * @memberof google.cloud.datalabeling.v1beta1
   */
  Feature: {
    FEATURE_UNSPECIFIED: 0,

    /**
     * Label whole image with one or more of labels.
     */
    CLASSIFICATION: 1,

    /**
     * Label image with bounding boxes for labels.
     */
    BOUNDING_BOX: 2,

    /**
     * Label oriented bounding box. The box does not have to be parallel to
     * horizontal line.
     */
    ORIENTED_BOUNDING_BOX: 6,

    /**
     * Label images with bounding poly. A bounding poly is a plane figure that
     * is bounded by a finite chain of straight line segments closing in a loop.
     */
    BOUNDING_POLY: 3,

    /**
     * Label images with polyline. Polyline is formed by connected line segments
     * which are not in closed form.
     */
    POLYLINE: 4,

    /**
     * Label images with segmentation. Segmentation is different from bounding
     * poly since it is more fine-grained, pixel level annotation.
     */
    SEGMENTATION: 5
  }
};

/**
 * Request message for LabelVideo.
 *
 * @property {Object} videoClassificationConfig
 *   Configuration for video classification task.
 *   One of video_classification_config, object_detection_config,
 *   object_tracking_config and event_config is required.
 *
 *   This object should have the same structure as [VideoClassificationConfig]{@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig}
 *
 * @property {Object} objectDetectionConfig
 *   Configuration for video object detection task.
 *   One of video_classification_config, object_detection_config,
 *   object_tracking_config and event_config is required.
 *
 *   This object should have the same structure as [ObjectDetectionConfig]{@link google.cloud.datalabeling.v1beta1.ObjectDetectionConfig}
 *
 * @property {Object} objectTrackingConfig
 *   Configuration for video object tracking task.
 *   One of video_classification_config, object_detection_config,
 *   object_tracking_config and event_config is required.
 *
 *   This object should have the same structure as [ObjectTrackingConfig]{@link google.cloud.datalabeling.v1beta1.ObjectTrackingConfig}
 *
 * @property {Object} eventConfig
 *   Configuration for video event task.
 *   One of video_classification_config, object_detection_config,
 *   object_tracking_config and event_config is required.
 *
 *   This object should have the same structure as [EventConfig]{@link google.cloud.datalabeling.v1beta1.EventConfig}
 *
 * @property {string} parent
 *   Required. Name of the dataset to request labeling task, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {Object} basicConfig
 *   Required. Basic human annotation config.
 *
 *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 *
 * @property {number} feature
 *   Required. The type of video labeling task.
 *
 *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
 *
 * @typedef LabelVideoRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.LabelVideoRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const LabelVideoRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Video labeling task feature.
   *
   * @enum {number}
   * @memberof google.cloud.datalabeling.v1beta1
   */
  Feature: {
    FEATURE_UNSPECIFIED: 0,

    /**
     * Label whole video or video segment with one or more labels.
     */
    CLASSIFICATION: 1,

    /**
     * Label objects with bounding box on image frames extracted from the video.
     */
    OBJECT_DETECTION: 2,

    /**
     * Label and track objects in video.
     */
    OBJECT_TRACKING: 3,

    /**
     * Label the range of video for the specified events.
     */
    EVENT: 4
  }
};

/**
 * Request message for LabelText.
 *
 * @property {Object} textClassificationConfig
 *   Configuration for text classification task.
 *   One of text_classification_config and text_entity_extraction_config
 *   is required.
 *
 *   This object should have the same structure as [TextClassificationConfig]{@link google.cloud.datalabeling.v1beta1.TextClassificationConfig}
 *
 * @property {Object} textEntityExtractionConfig
 *   Configuration for entity extraction task.
 *   One of text_classification_config and text_entity_extraction_config
 *   is required.
 *
 *   This object should have the same structure as [TextEntityExtractionConfig]{@link google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig}
 *
 * @property {string} parent
 *   Required. Name of the data set to request labeling task, format:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {Object} basicConfig
 *   Required. Basic human annotation config.
 *
 *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 *
 * @property {number} feature
 *   Required. The type of text labeling task.
 *
 *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
 *
 * @typedef LabelTextRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.LabelTextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const LabelTextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Text labeling task feature.
   *
   * @enum {number}
   * @memberof google.cloud.datalabeling.v1beta1
   */
  Feature: {
    FEATURE_UNSPECIFIED: 0,

    /**
     * Label text content to one of more labels.
     */
    TEXT_CLASSIFICATION: 1,

    /**
     * Label entities and their span in text.
     */
    TEXT_ENTITY_EXTRACTION: 2
  }
};

/**
 * Request message for GetExample
 *
 * @property {string} name
 *   Required. Name of example, format:
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
 *   {annotated_dataset_id}/examples/{example_id}
 *
 * @property {string} filter
 *   Optional. An expression for filtering Examples. Filter by
 *   annotation_spec.display_name is supported. Format
 *   "annotation_spec.display_name = {display_name}"
 *
 * @typedef GetExampleRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetExampleRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetExampleRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListExamples.
 *
 * @property {string} parent
 *   Required. Example resource parent.
 *
 * @property {string} filter
 *   Optional. An expression for filtering Examples. For annotated datasets that
 *   have annotation spec set, filter by
 *   annotation_spec.display_name is supported. Format
 *   "annotation_spec.display_name = {display_name}"
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by
 *   ListExamplesResponse.next_page_token of the previous
 *   [DataLabelingService.ListExamples] call.
 *   Return first page if empty.
 *
 * @typedef ListExamplesRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListExamplesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListExamplesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of listing Examples in and annotated dataset.
 *
 * @property {Object[]} examples
 *   The list of examples to return.
 *
 *   This object should have the same structure as [Example]{@link google.cloud.datalabeling.v1beta1.Example}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListExamplesResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListExamplesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListExamplesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateAnnotationSpecSet.
 *
 * @property {string} parent
 *   Required. AnnotationSpecSet resource parent, format:
 *   projects/{project_id}
 *
 * @property {Object} annotationSpecSet
 *   Required. Annotation spec set to create. Annotation specs must be included.
 *   Only one annotation spec will be accepted for annotation specs with same
 *   display_name.
 *
 *   This object should have the same structure as [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}
 *
 * @typedef CreateAnnotationSpecSetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.CreateAnnotationSpecSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const CreateAnnotationSpecSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetAnnotationSpecSet.
 *
 * @property {string} name
 *   Required. AnnotationSpecSet resource name, format:
 *   projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
 *
 * @typedef GetAnnotationSpecSetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetAnnotationSpecSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetAnnotationSpecSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListAnnotationSpecSets.
 *
 * @property {string} parent
 *   Required. Parent of AnnotationSpecSet resource, format:
 *   projects/{project_id}
 *
 * @property {string} filter
 *   Optional. Filter is not supported at this moment.
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by
 *   ListAnnotationSpecSetsResponse.next_page_token of the previous
 *   [DataLabelingService.ListAnnotationSpecSets] call.
 *   Return first page if empty.
 *
 * @typedef ListAnnotationSpecSetsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListAnnotationSpecSetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of listing annotation spec set under a project.
 *
 * @property {Object[]} annotationSpecSets
 *   The list of annotation spec sets.
 *
 *   This object should have the same structure as [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListAnnotationSpecSetsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListAnnotationSpecSetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteAnnotationSpecSet.
 *
 * @property {string} name
 *   Required. AnnotationSpec resource name, format:
 *   `projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}`.
 *
 * @typedef DeleteAnnotationSpecSetRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.DeleteAnnotationSpecSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const DeleteAnnotationSpecSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateInstruction.
 *
 * @property {string} parent
 *   Required. Instruction resource parent, format:
 *   projects/{project_id}
 *
 * @property {Object} instruction
 *   Required. Instruction of how to perform the labeling task.
 *
 *   This object should have the same structure as [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}
 *
 * @typedef CreateInstructionRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.CreateInstructionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const CreateInstructionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetInstruction.
 *
 * @property {string} name
 *   Required. Instruction resource name, format:
 *   projects/{project_id}/instructions/{instruction_id}
 *
 * @typedef GetInstructionRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetInstructionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetInstructionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteInstruction.
 *
 * @property {string} name
 *   Required. Instruction resource name, format:
 *   projects/{project_id}/instructions/{instruction_id}
 *
 * @typedef DeleteInstructionRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.DeleteInstructionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const DeleteInstructionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListInstructions.
 *
 * @property {string} parent
 *   Required. Instruction resource parent, format:
 *   projects/{project_id}
 *
 * @property {string} filter
 *   Optional. Filter is not supported at this moment.
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by
 *   ListInstructionsResponse.next_page_token of the previous
 *   [DataLabelingService.ListInstructions] call.
 *   Return first page if empty.
 *
 * @typedef ListInstructionsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListInstructionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListInstructionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of listing instructions under a project.
 *
 * @property {Object[]} instructions
 *   The list of Instructions to return.
 *
 *   This object should have the same structure as [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListInstructionsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListInstructionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListInstructionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetEvaluation.
 *
 * @property {string} name
 *   Required. Name of the evaluation. Format:
 *
 *   "projects/<var>{project_id}</var>/datasets/<var>{dataset_id}</var>/evaluations/<var>{evaluation_id}</var>'
 *
 * @typedef GetEvaluationRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetEvaluationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetEvaluationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for SearchEvaluation.
 *
 * @property {string} parent
 *   Required. Evaluation search parent (project ID). Format:
 *   "projects/<var>{project_id}</var>"
 *
 * @property {string} filter
 *   Optional. To search evaluations, you can filter by the following:
 *
 *   * evaluation<span>_</span>job.evaluation_job_id (the last part of
 *     EvaluationJob.name)
 *   * evaluation<span>_</span>job.model_id (the <var>{model_name}</var> portion
 *     of EvaluationJob.modelVersion)
 *   * evaluation<span>_</span>job.evaluation_job_run_time_start (Minimum
 *     threshold for the
 *     evaluationJobRunTime that created
 *     the evaluation)
 *   * evaluation<span>_</span>job.evaluation_job_run_time_end (Maximum
 *     threshold for the
 *     evaluationJobRunTime that created
 *     the evaluation)
 *   * evaluation<span>_</span>job.job_state (EvaluationJob.state)
 *   * annotation<span>_</span>spec.display_name (the Evaluation contains a
 *     metric for the annotation spec with this
 *     displayName)
 *
 *   To filter by multiple critiera, use the `AND` operator or the `OR`
 *   operator. The following examples shows a string that filters by several
 *   critiera:
 *
 *   "evaluation<span>_</span>job.evaluation_job_id =
 *   <var>{evaluation_job_id}</var> AND evaluation<span>_</span>job.model_id =
 *   <var>{model_name}</var> AND
 *   evaluation<span>_</span>job.evaluation_job_run_time_start =
 *   <var>{timestamp_1}</var> AND
 *   evaluation<span>_</span>job.evaluation_job_run_time_end =
 *   <var>{timestamp_2}</var> AND annotation<span>_</span>spec.display_name =
 *   <var>{display_name}</var>"
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by the
 *   nextPageToken of the response
 *   to a previous search request.
 *
 *   If you don't specify this field, the API call requests the first page of
 *   the search.
 *
 * @typedef SearchEvaluationsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.SearchEvaluationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const SearchEvaluationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of searching evaluations.
 *
 * @property {Object[]} evaluations
 *   The list of evaluations matching the search.
 *
 *   This object should have the same structure as [Evaluation]{@link google.cloud.datalabeling.v1beta1.Evaluation}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef SearchEvaluationsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.SearchEvaluationsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const SearchEvaluationsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message of SearchExampleComparisons.
 *
 * @property {string} parent
 *   Required. Name of the Evaluation resource to search for example
 *   comparisons from. Format:
 *
 *   "projects/<var>{project_id}</var>/datasets/<var>{dataset_id}</var>/evaluations/<var>{evaluation_id}</var>"
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by the
 *   nextPageToken of the response
 *   to a previous search rquest.
 *
 *   If you don't specify this field, the API call requests the first page of
 *   the search.
 *
 * @typedef SearchExampleComparisonsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.SearchExampleComparisonsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const SearchExampleComparisonsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of searching example comparisons.
 *
 * @property {Object[]} exampleComparisons
 *   A list of example comparisons matching the search criteria.
 *
 *   This object should have the same structure as [ExampleComparison]{@link google.cloud.datalabeling.v1beta1.ExampleComparison}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef SearchExampleComparisonsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const SearchExampleComparisonsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Example comparisons comparing ground truth output and predictions for a
   * specific input.
   *
   * @property {Object} groundTruthExample
   *   The ground truth output for the input.
   *
   *   This object should have the same structure as [Example]{@link google.cloud.datalabeling.v1beta1.Example}
   *
   * @property {Object[]} modelCreatedExamples
   *   Predictions by the model for the input.
   *
   *   This object should have the same structure as [Example]{@link google.cloud.datalabeling.v1beta1.Example}
   *
   * @typedef ExampleComparison
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.SearchExampleComparisonsResponse.ExampleComparison definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
   */
  ExampleComparison: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Request message for CreateEvaluationJob.
 *
 * @property {string} parent
 *   Required. Evaluation job resource parent. Format:
 *   "projects/<var>{project_id}</var>"
 *
 * @property {Object} job
 *   Required. The evaluation job to create.
 *
 *   This object should have the same structure as [EvaluationJob]{@link google.cloud.datalabeling.v1beta1.EvaluationJob}
 *
 * @typedef CreateEvaluationJobRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.CreateEvaluationJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const CreateEvaluationJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for UpdateEvaluationJob.
 *
 * @property {Object} evaluationJob
 *   Required. Evaluation job that is going to be updated.
 *
 *   This object should have the same structure as [EvaluationJob]{@link google.cloud.datalabeling.v1beta1.EvaluationJob}
 *
 * @property {Object} updateMask
 *   Optional. Mask for which fields to update. You can only provide the
 *   following fields:
 *
 *   * `evaluationJobConfig.humanAnnotationConfig.instruction`
 *   * `evaluationJobConfig.exampleCount`
 *   * `evaluationJobConfig.exampleSamplePercentage`
 *
 *   You can provide more than one of these fields by separating them with
 *   commas.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateEvaluationJobRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.UpdateEvaluationJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const UpdateEvaluationJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetEvaluationJob.
 *
 * @property {string} name
 *   Required. Name of the evaluation job. Format:
 *
 *   "projects/<var>{project_id}</var>/evaluationJobs/<var>{evaluation_job_id}</var>"
 *
 * @typedef GetEvaluationJobRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GetEvaluationJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const GetEvaluationJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for PauseEvaluationJob.
 *
 * @property {string} name
 *   Required. Name of the evaluation job that is going to be paused. Format:
 *
 *   "projects/<var>{project_id}</var>/evaluationJobs/<var>{evaluation_job_id}</var>"
 *
 * @typedef PauseEvaluationJobRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.PauseEvaluationJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const PauseEvaluationJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message ResumeEvaluationJob.
 *
 * @property {string} name
 *   Required. Name of the evaluation job that is going to be resumed. Format:
 *
 *   "projects/<var>{project_id}</var>/evaluationJobs/<var>{evaluation_job_id}</var>"
 *
 * @typedef ResumeEvaluationJobRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ResumeEvaluationJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ResumeEvaluationJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message DeleteEvaluationJob.
 *
 * @property {string} name
 *   Required. Name of the evaluation job that is going to be deleted. Format:
 *
 *   "projects/<var>{project_id}</var>/evaluationJobs/<var>{evaluation_job_id}</var>"
 *
 * @typedef DeleteEvaluationJobRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.DeleteEvaluationJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const DeleteEvaluationJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListEvaluationJobs.
 *
 * @property {string} parent
 *   Required. Evaluation job resource parent. Format:
 *   "projects/<var>{project_id}</var>"
 *
 * @property {string} filter
 *   Optional. You can filter the jobs to list by model_id (also known as
 *   model_name, as described in
 *   EvaluationJob.modelVersion) or by
 *   evaluation job state (as described in EvaluationJob.state). To filter
 *   by both criteria, use the `AND` operator or the `OR` operator. For example,
 *   you can use the following string for your filter:
 *   "evaluation<span>_</span>job.model_id = <var>{model_name}</var> AND
 *   evaluation<span>_</span>job.state = <var>{evaluation_job_state}</var>"
 *
 * @property {number} pageSize
 *   Optional. Requested page size. Server may return fewer results than
 *   requested. Default value is 100.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results for the server to return.
 *   Typically obtained by the
 *   nextPageToken in the response
 *   to the previous request. The request returns the first page if this is
 *   empty.
 *
 * @typedef ListEvaluationJobsRequest
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListEvaluationJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListEvaluationJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results for listing evaluation jobs.
 *
 * @property {Object[]} evaluationJobs
 *   The list of evaluation jobs to return.
 *
 *   This object should have the same structure as [EvaluationJob]{@link google.cloud.datalabeling.v1beta1.EvaluationJob}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 * @typedef ListEvaluationJobsResponse
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ListEvaluationJobsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_labeling_service.proto}
 */
const ListEvaluationJobsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};