module.exports = function(context,y) {
    context.log('Node.js Blob trigger function processed');
    context.bindings.myOutputBlob=context.bindings.myInputBlob+context.bindingData.blobTrigger+"  "+context.bindings.myBlob.length+'\n';
    context.done();
};
