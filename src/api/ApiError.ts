export const HttpStatus = {

    BadRequest: 400,

    Unauthorized: 401,

    Forbidden: 403,

    NotFound: 404,

    Conflict: 409,

    UnprocessableEntity: 422,

    InternalServerError: 500,

} as const;

export class ApiError extends Error {

    constructor(
        public readonly status: number,
        message: string,
        public readonly body?: unknown,
    ) {
        super(message);

        this.name = "ApiError";
    }

}