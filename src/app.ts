import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const HttpLambdaInvokerExample = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log(event);
  return { body: JSON.stringify({ data: 'contains valuable serverless data' }), statusCode: 200 };
};
