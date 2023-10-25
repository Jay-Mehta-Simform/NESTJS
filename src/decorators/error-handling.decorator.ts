export const Catch = (): any => {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            try {
                const result = originalMethod.apply(this, args);
                return result;
            } catch (error) {
                this.logger.error(error);
                //console.log(error);
            }
        };
        return descriptor;
    };
};
