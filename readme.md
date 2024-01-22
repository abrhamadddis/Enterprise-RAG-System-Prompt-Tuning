# Prompt Tuning For Building Enterprise Grade RAG Systems

PromptlyTech repository, a specialized hub committed to refining Language Models (LLMs) by employing cutting-edge Prompt Engineering and leveraging the power of Retrieve, Answer, Generate (RAG) techniques. Our toolkit is designed to streamline prompt services, paving the way for elevated AI capabilities and advanced language model optimization

 **Table of Contents**
 - [Prompt Tuning For Building Enterprise Grade RAG Systems](#prompt-tuning-for-building-enterprise-grade-rag-systems)
  - [Overview](#overview)
  - [Features](Features)
  - [Project Structure](#project-structure)
    - [.github](#.github)
    - [notebooks](#notebooks)
    - [scripts](#scripts)
    - [tests](#tests)
    - [root folder](#root-folder)
  - [Installation guide](#Installation)

## Key Services
1. **Automatic Prompt Generation Service:**
   -Streamline prompt creation for efficient utilization of LLMs' power.

2. **Automatic Test Case Generation Service:**
   - Automate the creation of varied test cases to achieve comprehensive coverage and enhance overall reliability.

3. **Prompt Testing and Ranking Service:**
   - Assess and prioritize prompts according to their effectiveness, guaranteeing optimal results from LLMs.

## Features
- Smooth integration with cutting-edge LLMs such as GPT-3.5 and GPT-4.
- Automated testing and ranking to boost user engagement and satisfaction.

## Workflow

### Prompt the chatbot about this week challenge

![work flow](./image/rag.png)

## Getting Started

1. Clone this repository:

```sh
git clone https://github.com/abrhamadddis/Enterprise-RAG-System-Prompt-Tuning
cd  Enterprise-RAG-System-Prompt-Tuning
```

2. Setup environment variables on `.env`:

(create .env file in the [Title](Makefile)root directory)

```bash
#################
# Development env
#################

OPENAI_API_KEY=""
VECTORDB_MODEL="gpt-3.5-turbo"
```


# Installation

**Run**

```bash
# create virtual environment
python3 -m venv venv

# activate
source venv/bin/activate

# install requirements
pip install -r requirements.txt

# to generate test data
make data_generate

# to evaluate user input data (prob., accur., confid.)
make data_evaluate
```
Frontend
```
cd Enterprise-RAG-System-Prompt-Tuning/front-end
npm install
npm start
```
## Collaborators

- [Abhram Addis](https://github.com/abrhamadddis)