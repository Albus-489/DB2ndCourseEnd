USE LAB_6;

CREATE TABLE Clients
	(
		cID	int PRIMARY KEY auto_increment,
		cName		nvarchar(50) NOT NULL,
		cType		nvarchar(50) NOT NULL,
		cAddress   nvarchar(50) NOT NULL,
		cPhone		nvarchar(50) NULL
	);

CREATE TABLE Securities
	(
		SecuritiesID	int PRIMARY KEY auto_increment,
		MinimumAmount	float NULL, 
		Rating			int   NULL,
		Profitability	int   NULL,
		AdditionalInfo nvarchar(100)
	);
GO

CREATE TABLE Investments
 (
	Invest_ID      int IDENTITY(1,1) NOT NULL,
	Securities_ID  int      NOT NULL, 
	Client_ID      int      NOT NULL,
	Quotation      float        NULL,
	DateOfPurchase DATETIME NOT NULL,
	DateOfSale	   DATETIME NOT NULL
	
	PRIMARY KEY (Invest_ID, Client_ID, Securities_ID)

	FOREIGN KEY (Securities_ID) REFERENCES Securities(Securities_ID),
	FOREIGN KEY (Client_ID)     REFERENCES Clients(Client_ID)
 );