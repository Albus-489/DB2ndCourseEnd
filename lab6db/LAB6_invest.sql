use lab_6;
create table investments(
	iID integer not null AUTO_INCREMENT,
    cID integer not null,
    SecuritiesID int not null,
    quotation int not null,
    purchaseDate datetime not null,
    saleDate datetime not null,
    foreign key(cID) references clients(cID),
    foreign key(SecuritiesID)references securities(SecuritiesID),
    primary key(iID)
);