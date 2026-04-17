@echo off
cd /d "%~dp0artifacts\thecodex\ai_assistant"
python train_model.py
python server.py
