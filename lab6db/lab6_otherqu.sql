use lab_6;

-- drop table clients;
-- drop table investments;
-- drop table securities;

insert clients(cName, cType, cAddress, cPhone)
values
('NAME1', 'TYPE1', 'address1', '0995181223'),
('NAME2', 'TYPE2', 'address2', '0995181223');

insert securities(MinimumAmount, Rating, Profitability, AdditionalInfo)
values
(260, 100, 68, 'info1'),
(590,  95, 70, 'info2');

insert investments(cID, SecuritiesID, quotation, purchaseDate, saleDate)
values
(1, 1, 260, "2022-03-01 12:13:11", "2022-04-02 11:13:11"),
(1, 2,  590, "2022-03-01 12:13:11", "2022-04-02 11:13:11"),
(2, 1,  300, "2022-04-21 12:13:11", "2022-06-02 11:13:11"),
(2, 2,  630, "2022-03-22 12:13:11", "2022-04-13 11:13:11");

select * from clients;
select * from securities;
select * from investments;

select * from securities 
order by MinimumAmount;
