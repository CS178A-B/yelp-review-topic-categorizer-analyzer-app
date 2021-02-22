from google.cloud import automl

# TODO(developer): Uncomment and set the following variables
project_id = "XXX"
model_id = "XXX"

prediction_client = automl.PredictionServiceClient()

# Get the full path of the model.
model_full_id = automl.AutoMlClient.model_path(
    project_id, "us-central1", model_id
)

def predict(content):

    # Supported mime_types: 'text/plain', 'text/html'
    # https://cloud.google.com/automl/docs/reference/rpc/google.cloud.automl.v1#textsnippet
    text_snippet = automl.TextSnippet(
        content=content, mime_type="text/plain"
    )
    payload = automl.ExamplePayload(text_snippet=text_snippet)

    response = prediction_client.predict(name=model_full_id, payload=payload)
    

    for annotation_payload in response.payload:
        # print(
        #     u"Predicted class name: {}".format(annotation_payload.display_name)
        # )
        # print(
        #     u"Predicted class score: {}".format(
        #         annotation_payload.classification.score
        #     )
        # )
        return annotation_payload.display_name
        break
