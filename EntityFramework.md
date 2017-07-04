# Entity Framework 6 #


### `Database.SetInitializer(new NullDatabaseInitializer<DartContext>());` ###
this is a performance booster;
it prevents EF from doing all the checking around migrations

### Eager Loading ###

    DbSet<>.Include(x => x.Related);

### Explicit Loading ###

    DbContext.Entry(object).Collection(x => x.CollectionProperty).Load();

### Lazy Loading ###
property marked as virtual

### Projections ###

    .Select(x => new {})

### Client Only Property on some/all types ###

    modelBuilder.Types.Configure(x => x.Ignore("IsDirty");


### Outputs sql statements ###

    db.Database.Log = s => Debug.WriteLine(s);

### Uses db default for null comparisons ###

    db.Configuration.UseDatabaseNullSemantics = true;
