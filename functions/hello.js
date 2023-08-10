const handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({name:'hello'})
    }
  } catch (error) {
    console.log(error.response.status)
    return {
      statusCode: error.response.status,
      body: error.message
    }
  }
}

module.exports = { handler }