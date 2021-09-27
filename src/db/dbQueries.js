const ObjectID = require('mongodb').ObjectID;

/**
 * Function to execute aggregation query
 * @param {Object} db Database connection
 * @param {String} collectionName Name of Db collection
 * @param {String} scenarioId
 */
function aggregate(db, collectionName, query) {
    return db
        .collection(collectionName)
        .aggregate(query)
        .toArray()
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.error('An error occurred: ', err);
            throw err;
        });
}

/**
 * Create query for lookup
 * @param {String} foreignTable, Name of foreign table to perfom lookup (join)
 * @param {String} localField
 * @param {String} foreignField
 * @param {String} aliasName
 */
function constructLookupQuery(foreignTable, localField, foreignField, aliasName) {
    return {
        $lookup: {
            from: foreignTable,
            localField: localField,
            foreignField: foreignField,
            as: aliasName
        }
    };
}

/**
 * Create Project Query
 * @param {Objects} fields
 */
function constructProjectQuery(fields) {
    return {
        $project: fields
    };
}

/**
 * Create group by query
 * @param {Object} json
 */
function constructGroupByQuery(json) {
    return {
        $group: json
    };
}

/**
 * Create unwind query
 * @param {String} field , field name which should be unwind
 */
function constructUnwindQuery(field, preserveNull = false) {
    return {
        $unwind: {
            path: field,
            preserveNullAndEmptyArrays: preserveNull
        }
    };
}

/**
 * Function to create match query
 * @param {Object} conditions - conditions to match query
 */
function constructMatchQuery(conditions) {
    return {
        $match: conditions
    };
}

/**
 * @param {int} limit
 */
const constructLimitQuery = (limit) => {
    return {
        $limit: limit
    };
};

/**
  * @param {int} skip 
  */
 const constructSkipQuery = (skip) => {
    return {
        '$skip': skip
    }
};

/**
 * @param {string} sortBy field name to sort by
 * @param {int} sortOrder -1 means desc and 1 means asc
 */
const constructSortQuery = (sortBy, sortOrder) => {
    let sortObj = {};
    sortObj[sortBy] = sortOrder;

    return {
        $sort: sortObj
    };
};

/**
 * @param {object} db
 * @param {string} collectionName
 * @param {object} data
 */
const insertOne = async (db, collectionName, data) => {
    return await db.collection(collectionName).insertOne(data);
};

/**
 * @param {object} db
 * @param {string} collectionName
 * @param {object} query
 */
const findOne = async (db, collectionName, query) => {
    return await db.collection(collectionName).findOne(query);
};

/**
 * @param {object} db
 * @param {string} collectionName
 * @param {object} query
 */
const find = async (db, collectionName, query, projection = {}) => {
    return await db
        .collection(collectionName)
        .find(query, projection)
        .toArray()
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.error('An error occurred: ', err);
            throw err;
        });
};

/**
 * Function to check given id exists in collection or not
 * @param {Object} db Database connection
 * @param {String} collectionName Name of Db collection
 * @param {Object} id MongoDB objectId
 */
function findById(db, collectionName, id) {
    const query = {
        _id: ObjectID(id),
        deleted_at: { $eq: null }
    };

    return findOne(db, collectionName, query);
}

/**
 * @param {object} db
 * @param {string} collectionName
 * @param {object} query
 */
const count = async (db, collectionName, query) => {
    return await db.collection(collectionName).countDocuments(query);
};

/**
 * @param {object} db
 * @param {string} collectionName
 * @param {object} query
 * @param {object} data
 */
const findOneAndUpdate = async (db, collectionName, query, data) => {
    const result = await db
        .collection(collectionName)
        .findOneAndUpdate(query, { $set: data }, { returnOriginal: false });

    return result.value;
};

const constructAddFieldQuery = (field) => {
    return {
        $addFields: field
    };
};

/** Processes multiple aggregation pipelines within a single stage on the same set of input documents. 
 *  Each sub-pipeline has its own field in the output document where its results are stored as an array of documents.
 * @param  {object} outputFields
 */
const constructFacetQuery = (outputFields) => {
    return {
        '$facet': outputFields
    };
}

const constructReplaceRoot = (aliasCollectionName) => {
    return {
        $replaceRoot: {
            newRoot: {
                $mergeObjects: [{ $arrayElemAt: [aliasCollectionName, 0] }, '$$ROOT']
            }
        }
    };
}

module.exports = {
    aggregate,
    constructLookupQuery,
    constructProjectQuery,
    constructGroupByQuery,
    constructUnwindQuery,
    constructMatchQuery,
    constructSkipQuery,
    constructLimitQuery,
    constructSortQuery,
    constructAddFieldQuery,
    insertOne,
    findOne,
    findById,
    count,
    findOneAndUpdate,
    constructFacetQuery,
    find,
    constructReplaceRoot
};
