import React, { useCallback, useMemo } from "react";

export const useYupValidationResolver = (login_schema) => {
    useCallback(
      async (data) => {
        try {
            const values = await login_schema.validate(data, {
                abortEarly: false,
              })
              return {
                values,
                errors:{}
              }
        } catch (error) {
            return {
                values: {},
                errors: errors.inner.reduce(
                    (allErrors, currentError) => ({
                      ...allErrors,
                      [currentError.path]: {
                        type: currentError.type ?? "validation",
                        message: currentError.message,
                      },
                    }),
                    {}
                  ),
            }
        }
      },
      [login_schema],
    )
    
}