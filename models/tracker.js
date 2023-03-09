/*
tracker	
time_stamp	(TIME STAMP AUTOMATIC)*** PRIMARY KEY   
symptom_id	INT NOT NULL FOREIGN KEY symptom.id
note	STRING NULL OK 

***not sure how to do this, but think it should be possible
the idea is you can only enter one record at a time
so each record will have a unique timestamp
and we can use that as a unique id and primary key*/