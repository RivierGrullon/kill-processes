import os 

process_to_kill = input("write the name of the process you want to kill ")

os.system(f"taskkill /f /IM {process_to_kill}.exe")