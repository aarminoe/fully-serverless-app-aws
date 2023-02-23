
import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: 'us-east-1_lxiAnHS7a',
    ClientId: '18u1sgrmds02k5tdc36fgipehp'
}

export default new CognitoUserPool(poolData)