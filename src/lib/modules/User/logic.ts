export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

export const validateUserAge = (age: number): Result<number, string> => {
    if (age < 18) return { ok: false, error: "Debe ser mayor de edad" };
    return { ok: true, value: age };
};