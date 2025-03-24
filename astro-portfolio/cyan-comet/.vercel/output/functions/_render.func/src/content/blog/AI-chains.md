---
title: "AI Chains"
description: "Practical examples of AI chains"
pubDate: "Apr 09, 2024"
heroImage: "/blog/blog-placeholder-3.jpg"
---

An AI chain, also known as an AI model chain, refers to a series of connected AI models or algorithms used together to accomplish a specific task. For instance, in natural language processing, an AI chain could involve a sequence of models for tasks like text preprocessing, sentiment analysis, and text generation.

## Getting Started

First, before we start, we need to decide on a programming language to use. Here, you can choose whatever you like. But for the sake of this post, I'll be using Python. I recommend following along, but you may decide to use whatever you like. Most of the core concepts are the same for every language.

## Python & TensorFlow

Python is a high-level programming language that lets you work more efficiently and effectively with AI and much more. If you are following along with the post, you will need to have Python installed.

Download link: [https://www.python.org/downloads/](https://www.python.org/downloads/)

After having Python installed on your machine, we can proceed to installing TensorFlow. TensorFlow is an open-source library for creating and deploying machine learning models in various environments. If you are following along with the post, you will need to have TensorFlow installed.

Install link: [https://www.tensorflow.org/install](https://www.tensorflow.org/install)

## Hugging Face

Hugging Face is an open-source data science and machine learning platform. It serves as a hub for AI experts and enthusiasts, providing essential infrastructure for deploying, running, and training ML models. We are going to use Hugging Face to connect to all different types of AIs.

Link to sign up: [https://huggingface.co/](https://huggingface.co/)

After signing up, we can get our access token from: Settings -> Access Tokens

![Access Token](/blog/ai-chains/image.png)

#### Transformers

🤗 Transformers provides APIs and tools to easily download and train state-of-the-art pretrained models. Using pretrained models can reduce your compute costs, carbon footprint, and save you the time and resources required to train a model from scratch.

### Installation

- You need a deep learning library like:

  - [PyTorch installation instructions](https://pytorch.org/get-started/locally/)
  - [TensorFlow 2.0 installation instructions](https://www.tensorflow.org/install)
  - [Flax installation instructions](https://github.com/google/flax)

- Install Transformers

```
pip install transformers
```

If you are having issues, here is the link to the Hugging Face installation:
[https://huggingface.co/docs/transformers/installation](https://huggingface.co/docs/transformers/installation)

After setting up all of the necessary programs and libraries, we can get into programming.

## Using AI

To get us started, let's see if everything is working:

```
from transformers import pipeline

transcriber = pipeline(task="automatic-speech-recognition")
transcriber("https://huggingface.co/datasets/Narsil/asr_dummy/resolve/main/mlk.flac")
{'text': 'I HAVE A DREAM THAT ONE DAY THIS NATION WILL RISE UP LIVE UP TO THE TRUE MEANING OF ITS CREED'}
print(transcriber)
```

Run this code and see if the transformers library is working as it should. If it is, you are all set up to embark on your AI journey. Have fun and never stop programming!

## Sources

Steps from: [https://huggingface.co/docs/transformers/index](https://huggingface.co/docs/transformers/index)

## More Reading Material

### Books:

- _Pattern Recognition and Machine Learning_ by Christopher M. Bishop
- _Deep Learning_ by Ian Goodfellow, Yoshua Bengio, and Aaron Courville
- _Perceptrons: An Introduction to Computational Geometry_ by Marvin Minsky and Seymour Papert
- _Neural Networks for Pattern Recognition_ by Christopher M. Bishop (1995)

### Videos

- [What is Hugging Face? (In about a minute) by Eye on Tech](https://www.youtube.com/watch?v=jBFFUwL0TyY)
- [AI vs Machine Learning by IBM](https://www.youtube.com/watch?v=4RixMPF4xis)
- [Stanford CS221: Learn AI](https://www.youtube.com/playlist?list=PLoROMvodv4rO1NB9TD4iUZ3qghGEGtqNX)
