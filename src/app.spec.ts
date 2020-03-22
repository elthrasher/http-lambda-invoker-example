import { APIGatewayProxyEvent } from 'aws-lambda';

import { HttpLambdaInvokerExample } from './app';

describe('default tests', () => {
  it('should be replaced with a real test', async () => {
    const response = await HttpLambdaInvokerExample({ path: '/data' } as APIGatewayProxyEvent);
    expect(response).toMatchSnapshot();
  });
});
