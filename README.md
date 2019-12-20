# Please use the following instructions to RUN all 3 models:- 
In Local
scp -i .ssh/id_rsa environment.yml username@arc.csc.ncsu.edu:/home/username/
scp -i .ssh/id_rsa code_final.tar username@arc.csc.ncsu.edu:/home/username/

Inside ARC inside a GPU node 76
conda env create -f environment.yml
conda activate tf_test1
tar -xvf code_final.tar
cd deep_reuse/user_ops/
Please change in Makefile
TF_LFLAGS = -L/home/<yourusername>/anaconda3/envs/tf_test1/lib/python3.6/site-packages/tensorflow
TF_CFLAGS += -I/home/<yourusername>/anaconda3/envs/tf_test1/lib/python3.6/site-packages/tensorflow/include
make clean
make
cd ../slim_example
./scripts/eval_vgg_on_cifar10.sh
./scripts/eval_alexnet_on_cifar10.sh
./scripts/eval_cifarnet_on_cifar10.sh


# For test cases
Please go to the folder slim_example/nets/
Please change sys.append path to /home/<username>/deep_reuse/slim_example/ and save
python alexnet_test_cases.py to run test cases on AlexNet Model for various features


Please use different titanx node if it doesn't work
Please use p4000 node if this also doesn't work
