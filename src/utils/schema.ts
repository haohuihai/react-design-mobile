function adaptSchemaForMobile(schema: any): any {
    if (schema['mobile-x-component']) {
        schema['x-component'] = schema['mobile-x-component']
    }

    if (schema.properties) {
        Object.keys(schema.properties).forEach((key) => {
            adaptSchemaForMobile(schema.properties[key])
        })
    }

    return schema
}
export {
    adaptSchemaForMobile
}