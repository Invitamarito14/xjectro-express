import { JwtPayload } from 'jsonwebtoken';

type SecretKey = string;
interface AdditionalInfo {
    expiresIn?: string | number;
    secret: SecretKey;
}
declare function generateToken(payload: Record<string, unknown>, options: AdditionalInfo): string;
declare function verifyToken(token: string, options: AdditionalInfo): JwtPayload | string;

export { generateToken, verifyToken };
