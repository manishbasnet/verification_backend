const { validateVerifyCode } = require('../../src/validations');

describe('Verify Code Validation', () => {
    it('Should validate the  params body', async () => {
        const validRequestBody = {
            code: 123456
        };

        const response = await validateVerifyCode(validRequestBody);
        expect(response).toBeTruthy();
    });

    it('Should return failed validation response if request body is invalid', async () => {
        const invalidRequestBody = {
            code: '1234'
        };
        let thrownError;
        try {
            await validateVerifyCode(invalidRequestBody);
        } catch (error) {
            thrownError = error.message;
        }
        expect(thrownError).toEqual('Invalid Request Arguments');
    });
});



