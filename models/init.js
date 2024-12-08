import { executeQuery, executeNonQuery } from "@lib/db-queries"


export const Initialize = () => {
    try {
        executeNonQuery(
            "CREATE TABLE Students(UID VARCHAR(36) NOT NULL, PRN VARCHAR(8) PRIMARY KEY, Department VARCHAR(30), MobileNumber VARCHAR(10));",
            []
        )
        executeNonQuery(
            "CREATE TABLE Teachers(UID VARCHAR(36) NOT NULL, Department VARCHAR(30), MobileNumber VARCHAR(10));",
            []
        )
        executeNonQuery(
            "CREATE TABLE Users(UID VARCHAR(36) PRIMARY KEY, Name VARCHAR(50), Email VARCHAR(320), Type VARCHAR(10), PFP VARCHAR(200), TimeStamp VARCHAR(100));",
            []
        )
        executeNonQuery(
            "CREATE TABLE Courses(CID VARCHAR(16) PRIMARY KEY, FileNames VARCHAR(100), Files LONGBLOB, PFP VARCHAR(200), TimeStamp VARCHAR(100));",
            []
        )
        // CREATE TABLE Courses(C_ID VARCHAR(12) PRIMARY KEY, C_Name VARCHAR(20), , Email VARCHAR(50), Department VARCHAR(30), MobileNumber VARCHAR(10)); umber IN
        console.log("Database Initialized")
    } catch (error) {
        console.log(error)
    }
}