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
 * Describes an evaluation between a machine learning model's predictions and
 * ground truth labels. Created when an EvaluationJob runs successfully.
 *
 * @property {string} name
 *   Output only. Resource name of an evaluation. The name has the following
 *   format:
 *
 *   "projects/<var>{project_id}</var>/datasets/<var>{dataset_id}</var>/evaluations/<var>{evaluation_id</var>}'
 *
 * @property {Object} config
 *   Output only. Options used in the evaluation job that created this
 *   evaluation.
 *
 *   This object should have the same structure as [EvaluationConfig]{@link google.cloud.datalabeling.v1beta1.EvaluationConfig}
 *
 * @property {Object} evaluationJobRunTime
 *   Output only. Timestamp for when the evaluation job that created this
 *   evaluation ran.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} createTime
 *   Output only. Timestamp for when this evaluation was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} evaluationMetrics
 *   Output only. Metrics comparing predictions to ground truth labels.
 *
 *   This object should have the same structure as [EvaluationMetrics]{@link google.cloud.datalabeling.v1beta1.EvaluationMetrics}
 *
 * @property {number} annotationType
 *   Output only. Type of task that the model version being evaluated performs,
 *   as defined in the
 *
 *   evaluationJobConfig.inputConfig.annotationType
 *   field of the evaluation job that created this evaluation.
 *
 *   The number should be among the values of [AnnotationType]{@link google.cloud.datalabeling.v1beta1.AnnotationType}
 *
 * @property {number} evaluatedItemCount
 *   Output only. The number of items in the ground truth dataset that were used
 *   for this evaluation. Only populated when the evaulation is for certain
 *   AnnotationTypes.
 *
 * @typedef Evaluation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Evaluation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const Evaluation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration details used for calculating evaluation metrics and creating an
 * Evaluation.
 *
 * @property {Object} boundingBoxEvaluationOptions
 *   Only specify this field if the related model performs image object
 *   detection (`IMAGE_BOUNDING_BOX_ANNOTATION`). Describes how to evaluate
 *   bounding boxes.
 *
 *   This object should have the same structure as [BoundingBoxEvaluationOptions]{@link google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions}
 *
 * @typedef EvaluationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const EvaluationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options regarding evaluation between bounding boxes.
 *
 * @property {number} iouThreshold
 *   Minimum
 *   [intersection-over-union
 *
 *   (IOU)](https://cloud.google.com/vision/automl/object-detection/docs/evaluate#intersection-over-union)
 *   required for 2 bounding boxes to be considered a match. This must be a
 *   number between 0 and 1.
 *
 * @typedef BoundingBoxEvaluationOptions
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const BoundingBoxEvaluationOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} classificationMetrics
 *   This object should have the same structure as [ClassificationMetrics]{@link google.cloud.datalabeling.v1beta1.ClassificationMetrics}
 *
 * @property {Object} objectDetectionMetrics
 *   This object should have the same structure as [ObjectDetectionMetrics]{@link google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics}
 *
 * @typedef EvaluationMetrics
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const EvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metrics calculated for a classification model.
 *
 * @property {Object} prCurve
 *   Precision-recall curve based on ground truth labels, predicted labels, and
 *   scores for the predicted labels.
 *
 *   This object should have the same structure as [PrCurve]{@link google.cloud.datalabeling.v1beta1.PrCurve}
 *
 * @property {Object} confusionMatrix
 *   Confusion matrix of predicted labels vs. ground truth labels.
 *
 *   This object should have the same structure as [ConfusionMatrix]{@link google.cloud.datalabeling.v1beta1.ConfusionMatrix}
 *
 * @typedef ClassificationMetrics
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ClassificationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const ClassificationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metrics calculated for an image object detection (bounding box) model.
 *
 * @property {Object} prCurve
 *   Precision-recall curve.
 *
 *   This object should have the same structure as [PrCurve]{@link google.cloud.datalabeling.v1beta1.PrCurve}
 *
 * @typedef ObjectDetectionMetrics
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const ObjectDetectionMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} annotationSpec
 *   The annotation spec of the label for which the precision-recall curve
 *   calculated. If this field is empty, that means the precision-recall curve
 *   is an aggregate curve for all labels.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @property {number} areaUnderCurve
 *   Area under the precision-recall curve. Not to be confused with area under
 *   a receiver operating characteristic (ROC) curve.
 *
 * @property {Object[]} confidenceMetricsEntries
 *   Entries that make up the precision-recall graph. Each entry is a "point" on
 *   the graph drawn for a different `confidence_threshold`.
 *
 *   This object should have the same structure as [ConfidenceMetricsEntry]{@link google.cloud.datalabeling.v1beta1.ConfidenceMetricsEntry}
 *
 * @property {number} meanAveragePrecision
 *   Mean average prcision of this curve.
 *
 * @typedef PrCurve
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.PrCurve definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const PrCurve = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {number} confidenceThreshold
   *   Threshold used for this entry.
   *
   *   For classification tasks, this is a classification threshold: a
   *   predicted label is categorized as positive or negative (in the context of
   *   this point on the PR curve) based on whether the label's score meets this
   *   threshold.
   *
   *   For image object detection (bounding box) tasks, this is the
   *   [intersection-over-union
   *
   *   (IOU)](https://cloud.google.com/vision/automl/object-detection/docs/evaluate#intersection-over-union)
   *   threshold for the context of this point on the PR curve.
   *
   * @property {number} recall
   *   Recall value.
   *
   * @property {number} precision
   *   Precision value.
   *
   * @property {number} f1Score
   *   Harmonic mean of recall and precision.
   *
   * @property {number} recallAt1
   *   Recall value for entries with label that has highest score.
   *
   * @property {number} precisionAt1
   *   Precision value for entries with label that has highest score.
   *
   * @property {number} f1ScoreAt1
   *   The harmonic mean of recall_at1 and precision_at1.
   *
   * @property {number} recallAt5
   *   Recall value for entries with label that has highest 5 scores.
   *
   * @property {number} precisionAt5
   *   Precision value for entries with label that has highest 5 scores.
   *
   * @property {number} f1ScoreAt5
   *   The harmonic mean of recall_at5 and precision_at5.
   *
   * @typedef ConfidenceMetricsEntry
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
   */
  ConfidenceMetricsEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Confusion matrix of the model running the classification. Only applicable
 * when the metrics entry aggregates multiple labels. Not applicable when the
 * entry is for a single label.
 *
 * @property {Object[]} row
 *   This object should have the same structure as [Row]{@link google.cloud.datalabeling.v1beta1.Row}
 *
 * @typedef ConfusionMatrix
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ConfusionMatrix definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const ConfusionMatrix = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {Object} annotationSpec
   *   The annotation spec of a predicted label.
   *
   *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
   *
   * @property {number} itemCount
   *   Number of items predicted to have this label. (The ground truth label for
   *   these items is the `Row.annotationSpec` of this entry's parent.)
   *
   * @typedef ConfusionMatrixEntry
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
   */
  ConfusionMatrixEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * A row in the confusion matrix. Each entry in this row has the same
   * ground truth label.
   *
   * @property {Object} annotationSpec
   *   The annotation spec of the ground truth label for this row.
   *
   *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
   *
   * @property {Object[]} entries
   *   A list of the confusion matrix entries. One entry for each possible
   *   predicted label.
   *
   *   This object should have the same structure as [ConfusionMatrixEntry]{@link google.cloud.datalabeling.v1beta1.ConfusionMatrixEntry}
   *
   * @typedef Row
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
   */
  Row: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};