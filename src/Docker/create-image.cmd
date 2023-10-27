docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test3/app ../..
