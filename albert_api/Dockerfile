###########################################################
# Base image with most normal files
###########################################################
FROM python:3.7.3-slim-stretch as base


RUN pip install pip==19.1.1
RUN pip install poetry==0.12.16

RUN useradd -u 1000 -m albert
RUN mkdir /home/albert/src
RUN chown albert:albert /home/albert/src
WORKDIR /home/albert/src

USER albert

COPY --chown=albert:albert pyproject.toml .
COPY --chown=albert:albert poetry.lock .

RUN poetry install -v --no-dev

COPY --chown=albert:albert app.py .
COPY --chown=albert:albert factory factory

###########################################################
# Development
###########################################################
FROM base as development

RUN poetry install
