async function countResponses() {
    var results = {}
    const interval = process.argv.find((element) => element.startsWith("i"))?.substring(1) || 10
    const times = process.argv.find((element) => element.startsWith("x"))?.substring(1) || 1000
    console.log(`Calling server ${times} times with ${interval}ms between calls...`)
    for (var i = 0; i < times; i++) {
        const res = await fetch("http://localhost:8000")
            .catch(error => console.error(error));
        const data = await res.text()
        results[data] = (results[data] || 0) + 1
        await new Promise(resolve => setTimeout(resolve, interval));
    }
    console.log(results)
}

countResponses();
