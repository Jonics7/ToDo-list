package main

import (
	"log"
	"net/http"
)

func main() {
	port := ":9000"
	println("Server listen on port: ", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("ListenAndServe", err)
	}
}
