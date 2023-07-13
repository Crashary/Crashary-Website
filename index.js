// npm packages
const cookieParser = require("cookie-parser");
const express = require("express");

// setup info
const app = express();
const port = 80;

app.disable("x-powered-by");

// setup the website paths
app.get("/", async (req, response) => {
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
	response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
	response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.sendFile("index.html", {
		root: "."
	});
})

app.get("/policy", async (req, response) => {
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
	response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
	response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.sendFile("policy.html", {
		root: "."
	});
})

app.get("/bots", async (req, response) => {
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
	response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
	response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.sendFile("addBot.html", {
		root: "."
	});
})

app.get("assets-Manager.js", (req, response) => {
	const headers = req.headers;
	if(headers.referer !== "https://crashary.uk/") {
		response.sendFile("index.html", {
			root: "."
		});
		return;
	}
	response.sendFile("assets-Manager.js", {
		root: "."
	});
});

app.get("client-Manager.js", (req, response) => {
	const headers = req.headers;
	if (headers.referer !== "https://crashary.uk/") {
		response.sendFile("index.html", {
			root: "."
		});
		return;
	}
	response.sendFile("client-Manager.js", {
		root: "."
	});
});

app.get("analyze.js", (req, response) => {
	const headers = req.headers;
	if (headers.referer !== "https://crashary.uk/") {
		response.sendFile("index.html", {
			root: "."
		});
		return;
	}
	response.sendFile("analyze.js", {
		root: "."
	});
});

app.get("xpopup.js", (req, response) => {
	const headers = req.headers;
	if (headers.referer !== "https://crashary.uk/") {
		response.sendFile("index.html", {
			root: "."
		});
		return;
	}
	response.sendFile("xpopup.js", {
		root: "."
	});
});

app.get("core-Detect.js", (req, response) => {
	const headers = req.headers;
	if (headers.referer !== "https://crashary.uk/") {
		response.sendFile("index.html", {
			root: "."
		});
		return;
	}
	response.sendFile("core-Detect.js", {
		root: "."
	});
});

app.get("ads.txt", (req, response) => {
	const headers = req.headers;
	if (headers.referer !== "https://crashary.uk/") {
		response.sendFile("index.html", {
			root: "."
		});
		return;
	}
	response.sendFile("ads.txt", {
		root: "."
	});
});

// share files with website
app.use(express.static('assets'));
app.use(express.static('./assets/scripts'));
app.use(express.static('./assets/css'));
app.use(express.static('./assets/images'));
app.use(express.static('./assets/other'));

// display website to domain
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

// check if invaild path request is sent
app.all('*', (req, response) => {
  response.setHeader("X-Frame-Options", "SAMEORIGIN");
	response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
	response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.sendFile("accessDenied.html", {
		 root: "."
    });
});